<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('operationsessions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('doctor_id');
            $table->unsignedBigInteger('operation_id');
            $table->unsignedBigInteger('patient_id');
            $table->longText('clinique')->nullable();
            $table->json('teeths')->nullable();
            $table->json('bilans')->nullable();
            $table->json('ordonqnces')->nullable();
            $table->json('appointments')->nullable();
            $table->json('payments')->nullable();
            $table->integer('sessions')->nullable();
            $table->timestamps();
            $table->foreign('doctor_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('operation_id')->references('id')->on('operations')->onDelete('cascade');
            $table->foreign('patient_id')->references('id')->on('patients')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('operationsessions');
    }
};
