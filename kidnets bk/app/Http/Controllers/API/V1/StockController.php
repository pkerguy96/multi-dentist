<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\productoperationpage;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Models\ProductSupplier;
use App\Traits\HttpResponses;
use App\Traits\UserRoleCheck;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class StockController extends Controller
{
    use HttpResponses;
    use UserRoleCheck;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $doctorId = $this->checkUserRole();
        $searchQuery = $request->input('searchQuery');
        $patients =   Product::where('doctor_id', $doctorId)->orderBy('id', 'desc')
            ->paginate($request->get('per_page', 20));

        if (!empty($searchQuery)) {
            // If there's a search query, apply search filters
            $patients = Product::where('doctor_id', $doctorId)->where(function ($query) use ($searchQuery) {
                $query->where('bar_code', 'like', "%{$searchQuery}%")
                    ->orWhere('product_name', 'like', "%{$searchQuery}%");
                // Add more fields to search if necessary
            })
                ->orderBy('id', 'desc')
                ->paginate($request->get('per_page', 20));
        }

        return new ProductCollection($patients);
    }
    public function getProductsForOperation()
    {
        $doctorId = $this->checkUserRole();
        $products = Product::where('doctor_id', $doctorId)->select('id', 'product_name')->get();
        return productoperationpage::collection($products);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $doctorId = $this->checkUserRole();
        try {
            $validatedata = $request->validated();
            $validatedata['doctor_id'] = $doctorId;
            Product::create($validatedata);
            return $this->success(null, "Produit inséré avec succès", 201);
        } catch (\Throwable $th) {
            return $this->error($th, "Une erreur est survenue lors de l'insertion du produit.", 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $doctorId = $this->checkUserRole();
        $product = Product::where('doctor_id', $doctorId)->where('id', $id)->firstOrFail();
        if (!$product) {
            return $this->error(null, "Produit introuvable.", 404);
        }

        return new ProductResource($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreProductRequest $request, string $id)
    {
        $doctorId = $this->checkUserRole();
        $product = Product::where('doctor_id', $doctorId)->where('id', $id)->firstOrFail();
        if (!$product) {
            return $this->error(null, "Produit introuvable.", 404);
        }
        try {
            $validatedData = $request->validated();
            $product->update($validatedData);
            return $this->success(new ProductResource($product), "Produit mis à jour avec succès.", 200);
        } catch (\Throwable $th) {
            return $this->error($th, "Une erreur est survenue lors de la mise à jour du produit.", 500);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $doctorId = $this->checkUserRole();
        $product = Product::where('doctor_id', $doctorId)->where('id', $id)->firstOrFail();
        if (!$product) {
            return response()->json(['message' => 'Produit introuvable.'], 404);
        }
        try {
            $product->delete();
            return response()->json(['message' => 'Produit supprimé avec succès.'], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Une erreur est survenue lors de la suppression du produit.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
