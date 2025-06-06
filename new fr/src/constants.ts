export const CACHE_KEY_CompteRendu = ["CompteRendu"];
export const CACHE_KEY_PatientCompteRendu = "PatientCompteRendu";
export const CACHE_KEY_Patientsobservation = ["Patientsobservation"];
export const CACHE_KEY_Patientobservation = "Patientobservation";
export const CACHE_KEY_userLocation = ["userLocation"];
export const CACHE_KEY_getDoctorFiles = "getDoctorFiles";
export const CACHE_KEY_OpDetails = ["OpDetails"];
export const CACHE_KEY_Opnote = "Opnote";
export const CACHE_KEY_opappointment = "getOpertionAppointment";

export const CACHE_KEY_PATIENTS = ["patients"]; /*  */
export const CACHE_KEY_PatientsWaitingRoom = ["PatientCounterWaitingroom"];
export const CACHE_KEY_NURSES = ["nurses"];
export const CACHE_KEY_WAITINGLIST = ["Waitinglist"];
export const CACHE_KEY_APPOINTMENTS = ["appointments"];
export const CACHE_KEY_Ordonance = ["ordonance"];
export const CACHE_KEY_Operation = ["operation"];
export const CACHE_KEY_PatientDetails = "patientdetails";
export const CACHE_KEY_OperationDetail = "operationdetail";
export const CACHE_KEY_UploadInfo = ["uploadinfo"];
export const CACHE_KEY_UploadUrl = ["UploadUrl"];
export const CACHE_KEY_AppointmentsCount = ["AppointmentsCount"];
export const CACHE_KEY_CancellationRateKpi = ["CancellationRateKpi"];
export const CACHE_KEY_RevenueKpi = ["RevenueKpi"];
export const CACHE_KEY_CanceledApppointments = ["CanceledApppointments"];
export const CACHE_KEY_Agegroup = ["PatientsAgeGroup"];
export const CACHE_KEY_Cachier = ["Cachier"];
export const CACHE_KEY_OperationPref = ["OperationPref"];
export const CACHE_KEY_TeethOperationPref = ["TeethOperationPref"];
export const CACHE_KEY_operationSessionDetails = "operationSessionDetails";
export const CACHE_KEY_CachierNumber = ["CachierNumber"];
export const CACHE_KEY_totalPatients = ["totalPatients"];
export const CACHE_KEY_AppointmentsKpi = ["AppointmentsKpi"];
export const CACHE_KEY_Role = ["Role"];
export const CACHE_KEY_NurseRole = ["NurseRole"];
export const CACHE_KEY_WaitingRoom = ["waitingroomcounter"];
export const CACHE_KEY_Rolespermissions = ["rolespermission"];
export const CACHE_KEY_UsersRolePermission = ["Usersrolespermission"];
export const CACHE_KEY_incompletedOperations = ["incompletedOperations"];
export const CACHE_KEY_Products = ["Products"];
export const CACHE_KEY_Xray = "Xray";
export const CACHE_KEY_Bloodtest = ["BloodTest"];
export const CACHE_KEY_Notification = ["Notifications"];
export const CACHE_KEY_XrayPreferences = ["XrayPreferences"];
export const CACHE_KEY_ExamenPreferences = ["ExamenPreferences"];
export const CACHE_KEY_Suppliers = ["Suppliers"];
export const CACHE_KEY_NurseXray = ["NurseXray"];
export const CACHE_KEY_RecurringOperations = ["RecurringOperations"];
export const CACHE_KEY_SupplierTinyData = ["SupplierTinyData"];
export const CACHE_KEY_ProductOperation = ["ProductOperation"];
export const CACHE_KEY_ProductConsumed = ["ProductConsumed"];
export const CACHE_KEY_MonthlyAppointments = ["MonthlyAppointments"];
export const CACHE_KEY_Hospitals = ["Hospitals"];
export const CACHE_KEY_Hospitaloperations = ["Hospitaloperations"];
export const CACHE_KEY_SearchPatients = ["SearchPatients"];
export const CACHE_KEY_CanceledMonthlyAppointments = [
  "CanceledMonthlyAppointments",
];
export const CACHE_KEY_AvgWaitingRoom = ["AvgWaitingRoom"];
export const CACHE_KEY_TvWaitingRoom = ["TvWaitingRoom"];
export const CACHE_KEY_PatientReferral = ["PatientReferral"];
export const CACHE_KEY_BloodTestPreference = ["BloodTestPreference"];
export const CACHE_KEY_CreanceDashboardKpi = ["debtlolllll"];
/* new apis */
export const CACHE_KEY_operationNote = ["operationNote"];
export const CACHE_KEY_XraysWithCategoryBACK = ["XraysWithCategoryBACK"];
export const CACHE_KEY_OperationBloodTest = ["OperationBloodTest"];
export const CACHE_KEY_OrdonanceId = ["OrdonanceId"];

/* new apis */
export const CACHE_KEY_Url = "urllist";
export const CACHE_KEY_StockExit = ["StockExit"];
export const CACHE_KEY_Teeth = ["Teeth"];
export const CACHE_KEY_StockEntry = ["StockEntry"];
export const CACHE_KEY_BloodtestList = ["BloodtestList"];

export const CACHE_KEY_StockEntryUpdate = ["StockEntryUpdate"];
export const CACHE_KEY_PatienttinyData = "PatienttinyData";
export const CACHE_KEY_xrayCategory = ["xrayCategory"];
export const CACHE_KEY_ExamenCategory = ["ExamenCategory"];
export const CACHE_KEY_XraysWithCategory = ["XraysWithCategory"];
export const CACHE_KEY_ExamenWithCategory = ["ExamenWithCategory"];

export const PermissionListpatient = [
  { name: "access_patient", display: "Accès complet" },
  { name: "insert_patient", display: "Ajouter un patient" },
  { name: "update_patient", display: "Modifier un patient" },
  { name: "delete_patient", display: "Supprimer un patient" },
  { name: "detail_patient", display: "Détails du patient" },
];

export const reoccuringoperations = [
  {
    name: "access_operation_recurring",
    display: "Accès Opérations inachevées",
  },
];
export const PermissionListordonance = [
  { name: "access_ordonance", display: "Accès complet" },
  { name: "insert_ordonance", display: "Ajouter une ordonnance" },
  { name: "update_ordonance", display: "Modifier une ordonnance" },
  { name: "delete_ordonance", display: "Supprimer une ordonnance" },
];
export const PermissionListcreance = [
  { name: "access_creance", display: "Accès complet" },
];

export const PermissionListdebt = [
  { name: "access_debt", display: "Accès complet" },
  { name: "insert_debt", display: "Ajouter un paiement" },
  { name: "delete_debt", display: "Supprimer un paiement" },
];
export const PermissionExternalListExternalDebt = [
  { name: "access_external_debt", display: "Accès complet (dette externe)" },
  {
    name: "insert_external_debt",
    display: "Ajouter un paiement (dette externe)",
  },
  {
    name: "delete_external_debt",
    display: "Supprimer un paiement (dette externe)",
  },
];

export const PermissionListdocument = [
  { name: "access_document", display: "Accès complet" },
  { name: "insert_document", display: "Ajouter un document" },
  { name: "delete_document", display: "Supprimer un document" },
  { name: "download_document", display: "Télécharger un document" },
  { name: "detail_document", display: "Voir un document" },
];
export const PermissionListSupplier = [
  { name: "access_supplier", display: "Accès complet" },
  { name: "add_supplier", display: "Ajouter un fournisseur" },
  { name: "delete_supplier", display: "Supprimer un fournisseur" },
  { name: "modify_supplier", display: "Modifier un fournisseur" },
];
export const PermissionListProduct = [
  { name: "access_product", display: "Accès complet" },
  { name: "add_product", display: "Ajouter un produit" },
  { name: "delete_product", display: "Supprimer un produit" },
  { name: "modify_product", display: "Modifier un produit" },
  { name: "add_stock", display: "Ajouter au stock" },
];

export const PermissionListHistoriqueEnter = [
  { name: "access_historique_enter", display: "Accès complet" },
  { name: "modify_historique_enter", display: "Modifier historique enter" },

  {
    name: "delete_historique_enter",
    display: "Supprimer une entrée historique",
  },
];
export const PermissionListHistoriqueSortie = [
  { name: "access_historique_sortie", display: "Accès complet" },
  {
    name: "delete_historique_sortie",
    display: "Supprimer une sortie historique",
  },
];
export const settingsPermissions = [
  { name: "access_op_settings", display: "Opération paramètres" },
  {
    name: "access_xray_settings",
    display: "Radiographie paramètres",
  },
];

export const referral = [
  {
    title: "Direct",
    value: "Direct",
  },
  {
    title: "Recherche organique",
    value: "Recherche organique",
  },
  {
    title: "Réseaux sociaux",
    value: "Réseaux sociaux",
  },
  {
    title: "Recherche payante",
    value: "Recherche payante",
  },
  {
    title: "Référencement",
    value: "Référencement",
  },
  {
    title: "Affiliation",
    value: "Affiliation",
  },
  {
    title: "Marketing d'influence",
    value: "Marketing d'influence",
  },
  {
    title: "Annuaires locaux et cartes",
    value: "Annuaires locaux et cartes",
  },
];
export const Allergies = [
  { title: "Pollen", value: "Pollen" },
  { title: "Acariens", value: "Acariens" },
  { title: "Poils d'animaux", value: "Poils d'animaux" },
  { title: "Arachides", value: "Arachides" },
  { title: "Antibiotiques", value: "Antibiotiques" },
  { title: "Latex", value: "Latex" },
  { title: "Fruits de mer", value: "Fruits de mer" },
  { title: "Noix", value: "Noix" },
  { title: "Médicaments", value: "Médicaments" },
  { title: "Moisissures", value: "Moisissures" },
];
export const Maladies = [
  { title: "Diabète", value: "Diabète" },
  { title: "Hypertension", value: "Hypertension" },
  { title: "Asthme", value: "Asthme" },
  { title: "Bronchite", value: "Bronchite" },
  { title: "Anémie", value: "Anémie" },
  { title: "Grippe", value: "Grippe" },
  { title: "Arthrite", value: "Arthrite" },
  { title: "Allergies saisonnières", value: "Allergies saisonnières" },
  { title: "Migraine", value: "Migraine" },
  { title: "Pneumonie", value: "Pneumonie" },
  { title: "Insuffisance cardiaque", value: "Insuffisance cardiaque" },
  { title: "Cancer", value: "Cancer" },
  { title: "COVID-19", value: "COVID-19" },
  { title: "Dépression", value: "Dépression" },
  { title: "Anxiété", value: "Anxiété" },
  { title: "Hypercholestérolémie", value: "Hypercholestérolémie" },
  { title: "Insomnie", value: "Insomnie" },
  { title: "Gastro-entérite", value: "Gastro-entérite" },
  { title: "Sinusite", value: "Sinusite" },
  { title: "Ostéoporose", value: "Ostéoporose" },
];

export const ViewTypes = [
  { title: "Face", value: "Face" },
  { title: "Profil", value: "Profil" },
];

export const BodySides = [
  { title: "Gauche", value: "Gauche" },
  { title: "Droite", value: "Droite" },
  { title: "Les deux", value: "Les_Deux" },
];
export const BoneDoctorBloodTests = [
  {
    title: "HEPATITE A - AC  IgM",
    code: "HAM",
    DELAI: "",
    price: "225.00",
  },
  {
    title: "HEPATITE A - AC IGG",
    code: "ACHAG",
    DELAI: "10 J",
    price: "225.00",
  },
  {
    title: "HEPATITE B - AC ANTI HBC IgM",
    code: "HBCIG",
    DELAI: "5 J",
    price: "270.00",
  },
  {
    title: "HEPATITE B - AC ANTI HBC TOTAUX",
    code: "ACHBC",
    DELAI: "2 J",
    price: "225.00",
  },
  {
    title: "HEPATITE B - AC ANTI HBE",
    code: "ACBE",
    DELAI: "5 J",
    price: "225.00",
  },
  {
    title: "HEPATITE B - AC ANTI HBS",
    code: "ACHBS",
    DELAI: "2 J",
    price: "225.00",
  },
  {
    title: "HEPATITE B - AG HBE",
    code: "AGBE",
    DELAI: "5 J",
    price: "225.00",
  },
  {
    title: "HEPATITE B - AG HBS",
    code: "AGHBS",
    DELAI: "2 J",
    price: "108.00",
  },
  {
    title: "HEPATITE B - AG HBS  (QUANTIFICATION)",
    code: "HBSTI",
    DELAI: "7 J",
    price: "350.00",
  },
  {
    title: "HEPATITE B - GENOTYPAGE",
    code: "GENB",
    DELAI: "10 J",
    price: "1125.00",
  },
  {
    title: "HEPATITE B - PCR",
    code: "PCRHB",
    DELAI: "10 J",
    price: "540.00",
  },
  {
    title: "HEPATITE B - PCR (CHARGE VIRALE)",
    code: "PCRQB",
    DELAI: "10 J",
    price: "910.00",
  },
  {
    title: "HEPATITE B GENOTYPAGE DE RESISTANCE AUX ANTIVIRAUX",
    code: "MVHB",
    DELAI: "21 J",
    price: "3000.00",
  },
  {
    title: "HEPATITE B MUTATION PROMOTEUR/PRE-CORE/CORE",
    code: "MPREC",
    DELAI: "15 J",
    price: "900.00",
  },
  {
    title: "HEPATITE C - AC ANTI VHC Dépistage",
    code: "HCV",
    DELAI: "2 J",
    price: "270.00",
  },
  {
    title: "HEPATITE C - GENOTYPAGE PAR SEQUENCAGE",
    code: "SEQHC",
    DELAI: "15 J",
    price: "1080.00",
  },
  {
    title: "HEPATITE C - GENOTYPAGE VIRUS",
    code: "GENC",
    DELAI: "10 J",
    price: "1080.00",
  },
  {
    title: "HEPATITE C - PCR",
    code: "PCRHC",
    DELAI: "10 J",
    price: "810.00",
  },
  {
    title: "HEPATITE C - PCR (CHARGE VIRALE)",
    code: "PCRQC",
    DELAI: "10 J",
    price: "1080.00",
  },
  {
    title: "HEPATITE DELTA, AC TOTAUX",
    code: "DELTA",
    DELAI: "12 J",
    price: "270.00",
  },
  {
    title: "HEPATITE DELTA, ANTIGENE",
    code: "HDAG",
    DELAI: "12 J",
    price: "400.00",
  },
  {
    title: "HEPATITE DELTA, IGM SPECIFIQUE",
    code: "HDIGM",
    DELAI: "12 J",
    price: "380.00",
  },
  {
    title: "HEPATITE E IGG",
    code: "HEPAE",
    DELAI: "12 J",
    price: "360.00",
  },
  {
    title: "HEPATITE E IGM",
    code: "ACHEM",
    DELAI: "12 J",
    price: "360.00",
  },
  {
    title: "HERPES SIMPLEX VIRUS 1 IGG",
    code: "HEGI",
    DELAI: "3 J",
    price: "180.00",
  },
  {
    title: "HERPES SIMPLEX VIRUS 1 IGM",
    code: "HEMI",
    DELAI: "3 J",
    price: "180.00",
  },
  {
    title: "HERPES SIMPLEX VIRUS 1/2 (PCR QUALITATIVE)",
    code: "HPCR",
    DELAI: "2 J",
    price: "900.00",
  },
  {
    title: "HERPES SIMPLEX VIRUS 2 IGG",
    code: "HEGII",
    DELAI: "3 J",
    price: "180.00",
  },
  {
    title: "HERPES SIMPLEX VIRUS 2 IGM",
    code: "HEMII",
    DELAI: "3 J",
    price: "180.00",
  },
  {
    title: "HERPES VIRUS TYPE 6 (PCR QUALITATIVE)",
    code: "PCRH6",
    DELAI: "7 J",
    price: "1100.00",
  },
  {
    title: "HERPES VIRUS TYPE 6 IGG",
    code: "HHV6G",
    DELAI: "7 J",
    price: "300.00",
  },
  {
    title: "HERPES VIRUS TYPE 6 IGM",
    code: "HHV6M",
    DELAI: "7 J",
    price: "800.00",
  },
  {
    title: "HERPES VIRUS TYPE 8 (PCR QUALITATIVE)",
    code: "PCRH8",
    DELAI: "7 J",
    price: "1100.00",
  },
  {
    title: "HERPES VIRUS TYPE 8 IGG",
    code: "HHV8G",
    DELAI: "7 J",
    price: "800.00",
  },
  {
    title: "HIV AG P24",
    code: "P24AG",
    DELAI: "7 J",
    price: "300.00",
  },
  {
    title: "HIV DEPISTAGE",
    code: "HIV",
    DELAI: "6 J",
    price: "180.00",
  },
  {
    title: "HTLV I+II, CONFIRMATION",
    code: "HTLVW",
    DELAI: "7 J",
    price: "600.00",
  },
  {
    title: "HTLV I+II, DEPISTAGE",
    code: "HTLV",
    DELAI: "7 J",
    price: "350.00",
  },
  {
    title: "IL28B GENOTYPAGE",
    code: "IL28B",
    DELAI: "15 J",
    price: "600.00",
  },
  {
    title: "PARVOVIRUS B19 (PCR QUALITATIVE)",
    code: "PCPVS",
    DELAI: "7 J",
    price: "1100.00",
  },
  {
    title: "PARVOVIRUS B19 IGG + IGM",
    code: "PARV",
    DELAI: "7 J",
    price: "500.00",
  },
  {
    title: "POLYOMAVIRUS BK (CHARGE VIRALE)",
    code: "POLBK",
    DELAI: "8 J",
    price: "1900.00",
  },
  {
    title: "POLYOMAVIRUS JC (PCR QUALITATIVE)",
    code: "POLJC",
    DELAI: "8 J",
    price: "1900.00",
  },
  {
    title: "RAGE (PCR QUALITATIVE)",
    code: "RAGBM",
    DELAI: "3 J",
    price: "900.00",
  },
  {
    title: "ROTAVIRUS",
    code: "ROTA",
    DELAI: "1 J",
    price: "180.00",
  },
  {
    title: "TITRAGE Ac ANTI-RABIQUES",
    code: "ACARB",
    DELAI: "10 J",
    price: "280.00",
  },
  {
    title: "VARICELLE ZONA VIRUS (PCR QUALITIATIVE)",
    code: "PCRVZ",
    DELAI: "2 J",
    price: "900.00",
  },
  {
    title: "VARICELLE ZONA VIRUS IGG",
    code: "VARIG",
    DELAI: "3 J",
    price: "180.00",
  },
  {
    title: "VARICELLE ZONA VIRUS IGM",
    code: "VARIM",
    DELAI: "3 J",
    price: "180.00",
  },
  {
    title: "VIRUS FIEVRE JAUNE ANTICORPS",
    code: "FJ",
    DELAI: "10 J",
    price: "250.00",
  },
  {
    title: "VIRUS RESPIRATOIRE SYNCYTIAL A/B (PCR QUALITATIVE)",
    code: "VRSBM",
    DELAI: "2 J",
    price: "900.00",
  },
  {
    title: "YERSINIA",
    code: "YERS",
    DELAI: "10 J",
    price: "350.00",
  },
];

export const Analyses = {
  "Chimie courante": [
    {
      analyse: "Acide urique",
      B: 30,
      prix: 40.2,
    },
    {
      analyse: "Albuminémie (Méthode immunologique)",
      B: 60,
      prix: 80.4,
    },
    {
      analyse: "Ammoniémie",
      B: 100,
      prix: 134,
    },
    {
      analyse: "Bilirubine (Totale Directe et Indirecte)",
      B: 70,
      prix: 93.8,
    },
    {
      analyse: "Calcium",
      B: 30,
      prix: 40.2,
    },
    {
      analyse: "Chlore",
      B: 30,
      prix: 40.2,
    },
    {
      analyse: "Chlore Cholestérol total",
      B: 30,
      prix: 40.2,
    },
    {
      analyse: "Cholestérol estérifié",
      B: 30,
      prix: 40.2,
    },
    {
      analyse: "Cholestérol H D L",
      B: 50,
      prix: 67,
    },
    {
      analyse: "Cholestérol L D L",
      B: 50,
      prix: 67,
    },
    {
      analyse: "Cholestérol HDL+ L D L",
      B: 80,
      prix: 107.2,
    },
    {
      analyse: "Créatinine",
      B: 30,
      prix: 40.2,
    },
    {
      analyse: "Electrophorèse de l'hémoglobine",
      B: 100,
      prix: 134,
    },
    {
      analyse: "Electrophorèse des lipides",
      B: 100,
      prix: 134,
    },
    {
      analyse: "Electrophorèse des protides",
      B: 100,
      prix: 134,
    },
    {
      analyse: "Fer sérique",
      B: 60,
      prix: 80.4,
    },
    {
      analyse: "Fer sérique+C T F",
      B: 100,
      prix: 134,
    },
    {
      analyse: "Fructosamine",
      B: 80,
      prix: 107.2,
    },
    {
      analyse: "Glycémie",
      B: 30,
      prix: 40.2,
    },
    {
      analyse: "Hémoglobine glycosylée",
      B: 100,
      prix: 134,
    },
    {
      analyse: "lonogramme complet( Na, K, CI, Prot, RA, Ca)",
      B: 160,
      prix: 214.4,
    },
    {
      analyse: "Lipides",
      B: 30,
      prix: 40.2,
    },
    {
      analyse: "Lipoprotéine A",
      B: 150,
      prix: 201,
    },
    {
      analyse: "Lipoprotéine B",
      B: 150,
      prix: 201,
    },
    {
      analyse: "Lipoprotéine A+B",
      B: 250,
      prix: 335,
    },
    {
      analyse: "Lithium",
      B: 50,
      prix: 67,
    },
    {
      analyse: "Magnésium plasmatique",
      B: 60,
      prix: 80.4,
    },
    {
      analyse: "Magnésium erythrocytaire",
      B: 80,
      prix: 107.2,
    },
    {
      analyse: "Oxalates",
      B: 180,
      prix: 241.2,
    },
    {
      analyse: "Phosphore minéral",
      B: 40,
      prix: 53.6,
    },
    {
      analyse: "Protéines",
      B: 30,
      prix: 40.2,
    },
    {
      analyse: "Potassium",
      B: 30,
      prix: 40.2,
    },
    {
      analyse: "Réserve alcaline",
      B: 40,
      prix: 53.6,
    },
    {
      analyse: "Sodium",
      B: 30,
      prix: 40.2,
    },
    {
      analyse: "Triglycérides",
      B: 60,
      prix: 80.4,
    },
    {
      analyse: "Urée",
      B: 30,
      prix: 40.2,
    },
  ],
  Enzymologie: [
    {
      analyse: "Aldolase",
      B: 100,
      prix: 134,
    },
    {
      analyse: "Amylase",
      B: 100,
      prix: 134,
    },
    {
      analyse: "CPK",
      B: 100,
      prix: 134,
    },
    {
      analyse: "CPK(NIB)",
      B: 200,
      prix: 268,
    },
    {
      analyse: "G6PDH",
      B: 100,
      prix: 134,
    },
    {
      analyse: "Gamma glutamyl transférase (GGT)",
      B: 50,
      prix: 67,
    },
    {
      analyse: "LDH",
      B: 50,
      prix: 67,
    },
    {
      analyse: "Phosphatases alcalines",
      B: 50,
      prix: 67,
    },
    {
      analyse: "Phosphatases acides",
      B: 50,
      prix: 67,
    },
    {
      analyse: "Phosphatases prostatiques",
      B: 50,
      prix: 67,
    },
    {
      analyse: "Transaminases 0 (TGO)",
      B: 50,
      prix: 67,
    },
    {
      analyse: "Transaminases P (TGP)",
      B: 50,
      prix: 67,
    },
    {
      analyse: "Lipase",
      B: 100,
      prix: 134,
    },
    {
      analyse: "Troponine",
      B: 250,
      prix: 335,
    },
  ],
  Hormonologie: [
    {
      analyse: "BHCG quantitatif",
      B: 250,
      prix: 335,
    },
    {
      analyse: "BHCG qualitatif",
      B: 100,
      prix: 134,
    },
    {
      analyse: "17BOestradiol",
      B: 250,
      prix: 335,
    },
    {
      analyse: "Cortisol",
      B: 250,
      prix: 335,
    },
    {
      analyse: "Ferritine",
      B: 250,
      prix: 335,
    },
    {
      analyse: "Insuline",
      B: 300,
      prix: 402,
    },
    {
      analyse: "LH",
      B: 250,
      prix: 335,
    },
    {
      analyse: "Progestérone",
      B: 250,
      prix: 335,
    },
    {
      analyse: "Prolactine",
      B: 250,
      prix: 335,
    },
    {
      analyse: "T3",
      B: 200,
      prix: 268,
    },
    {
      analyse: "T4",
      B: 200,
      prix: 268,
    },
    {
      analyse: "T4 libre",
      B: 200,
      prix: 268,
    },
    {
      analyse: "Testostérone",
      B: 300,
      prix: 402,
    },
    {
      analyse: "TSH",
      B: 250,
      prix: 335,
    },
    {
      analyse: "TSH us",
      B: 250,
      prix: 335,
    },
    {
      analyse: "T3L",
      B: 300,
      prix: 402,
    },
  ],
  "Chimies courante": [
    {
      analyse: "Acétone (recherche)",
      B: 10,
      prix: 13.4,
    },

    {
      analyse: "Calcium",
      B: 30,
      prix: 40.2,
    },

    {
      analyse: "Créatinine",
      B: 30,
      prix: 40.2,
    },
    {
      analyse: "Electrophorèse des protéines urinaires",
      B: 180,
      prix: 241.2,
    },
    {
      analyse: "Identification d'un calcul urinaire",
      B: 80,
      prix: 107.2,
    },
    {
      analyse: "Ph",
      B: 10,
      prix: 13.4,
    },
    {
      analyse: "Phosphore minéral",
      B: 40,
      prix: 53.6,
    },
    {
      analyse: "Potassium",
      B: 30,
      prix: 40.2,
    },
    {
      analyse: "Protéine (recherche)",
      B: 20,
      prix: 26.8,
    },
    {
      analyse: "Protéine (dosage)",
      B: 30,
      prix: 40.2,
    },
    {
      analyse: "Sédiment minéral",
      B: 30,
      prix: 40.2,
    },
    {
      analyse: "Sodium",
      B: 30,
      prix: 40.2,
    },
    {
      analyse: "Sucre (recherche)",
      B: 10,
      prix: 13.4,
    },
    {
      analyse: "Sucre (recherche + dosage)",
      B: 30,
      prix: 40.2,
    },
    {
      analyse: "Urée",
      B: 30,
      prix: 40.2,
    },
  ],
  Hormonologies: [
    {
      analyse: "Acide 5 hydroxyindol acétique (5 HIA)",
      B: 250,
      prix: 335,
    },
    {
      analyse: "Acide vanyl mandélique (VMA)",
      B: 250,
      prix: 335,
    },
    {
      analyse: "Acide hormovanilique",
      B: 250,
      prix: 335,
    },
    {
      analyse: "Catécholamines",
      B: 250,
      prix: 335,
    },
    {
      analyse: "17 cétosteroides",
      B: 250,
      prix: 335,
    },
    {
      analyse: "Dérivés méthoxylés (Métanéphrines-normétanéphrines)",
      B: 250,
      prix: 335,
    },
    {
      analyse: "Phenolstéroides",
      B: 250,
      prix: 335,
    },
    {
      analyse: "Porphyrines (recherche)",
      B: 100,
      prix: 134,
    },
    {
      analyse: "Porphyrines (dosage)",
      B: 150,
      prix: 201,
    },
    {
      analyse: "Prégnandiol",
      B: 250,
      prix: 335,
    },
    {
      analyse: "Prolans B",
      B: 200,
      prix: 268,
    },
    {
      analyse: "Test de grossesse",
      B: 80,
      prix: 107.2,
    },
  ],
  "Épreuves fonctionnelles": [
    {
      analyse: "Clearances de l'acide urique",
      B: 50,
      prix: 67,
    },
    {
      analyse: "Clearances de l'urée",
      B: 50,
      prix: 67,
    },
    {
      analyse: "Clearances de la créatinine",
      B: 50,
      prix: 67,
    },
    {
      analyse: "Épreuve d'hyperglycémie provoquée par voie orale",
      B: 150,
      prix: 201,
    },
    {
      analyse: "HLM (hématies-leucocytes-minutes) test d'Addis",
      B: 30,
      prix: 40.2,
    },
    {
      analyse: "Test au D-xylose",
      B: 180,
      prix: 241.2,
    },
    {
      analyse: "Test LH-RH: (4 temps) Sur FSH ou LH",
      B: 700,
      prix: 938,
    },
    {
      analyse: "Test LH-RH: (4 temps) Sur FSH et LH",
      B: 1200,
      prix: 1608,
    },
  ],
  "Bactériologie parasitologie mycologie": [
    {
      analyse: "Cytologie, culture, identification",
      B: 90,
      prix: 120.6,
    },
    {
      analyse: "Antibiogramme",
      B: 60,
      prix: 80.4,
    },
    {
      analyse: "Sulfamidogramme",
      B: 60,
      prix: 80.4,
    },
    {
      analyse: "Cytologie (en cas de prescription isolée)",
      B: 20,
      prix: 26.8,
    },
    {
      analyse: "Examen parasitologique urinaire ou vaginal",
      B: 20,
      prix: 26.8,
    },
    {
      analyse: "Examen mycologique (recherche)",
      B: 30,
      prix: 40.2,
    },
    {
      analyse: "Examen mycologique (culture, identification)",
      B: 60,
      prix: 80.4,
    },
    {
      analyse: "Recherche de BK + Concentration",
      B: 35,
      prix: 46.9,
    },
    {
      analyse: "Culture de Lowenstein",
      B: 30,
      prix: 40.2,
    },
  ],
  Hémoculture: [
    {
      analyse: "Culture (Aérobie-Anaérobie)",
      B: 80,
      prix: 107.2,
    },
    {
      analyse: "Identification",
      B: 30,
      prix: 40.2,
    },
    {
      analyse: "Recherche Chlamydiae direct par IA ou IF",
      B: 200,
      prix: 268,
    },
    {
      analyse: "Recherche de Myco asmes par culture",
      B: 200,
      prix: 268,
    },
  ],
  "Examen des selles": [
    {
      analyse: "Parasitologie (Examen direct + enrichissement)",
      B: 40,
      prix: 53.6,
    },
    {
      analyse: "Coproculture + identification",
      B: 100,
      prix: 134,
    },
    {
      analyse: "Recherche de sang par méthode colorimétrique",
      B: 60,
      prix: 80.4,
    },
    {
      analyse: "Recherche de sang par méthode immunologique",
      B: 150,
      prix: 201,
    },
    {
      analyse: "Coprologie fonctionnelle",
      B: 150,
      prix: 201,
    },
    {
      analyse: "Rotavirus",
      B: 200,
      prix: 268,
    },
    {
      analyse: "Adénovirus",
      B: 200,
      prix: 268,
    },
    {
      analyse: "Scttch test",
      B: 20,
      prix: 26.8,
    },
    {
      analyse: "Ectoparasites (Galle) recherche",
      B: 50,
      prix: 67,
    },
  ],
  "Sérologie bactérienne": [
    {
      analyse: "Antistaphylolysine",
      B: 50,
      prix: 67,
    },
    {
      analyse: "Antistreptodornase",
      B: 100,
      prix: 134,
    },
    {
      analyse: "Antistreptokinase",
      B: 100,
      prix: 134,
    },
    {
      analyse: "Antistreptolysine (Recherche, tirage)",
      B: 80,
      prix: 107.2,
    },
    {
      analyse: "Antistreptohyaluronidase",
      B: 100,
      prix: 134,
    },
    {
      analyse: "Brucellose (Wright)",
      B: 60,
      prix: 80.4,
    },
    {
      analyse: "Chlamydiae trachomatis",
      B: 180,
      prix: 241.2,
    },
    {
      analyse: "Hélicobacter pylori",
      B: 180,
      prix: 241.2,
    },
    {
      analyse: "Diphtérie",
      B: 190,
      prix: 254.6,
    },
    {
      analyse: "Gonococcie",
      B: 150,
      prix: 201,
    },
    {
      analyse: "Léptospirose",
      B: 150,
      prix: 201,
    },
    {
      analyse: "Listériose",
      B: 250,
      prix: 335,
    },
    {
      analyse: "Maladie de Lyme",
      B: 250,
      prix: 335,
    },
    {
      analyse: "Mycoplasmes génitaux (Hominis et uréalyticum)",
      B: 180,
      prix: 241.2,
    },
    {
      analyse: "Mycoplasma pneumoniae",
      B: 180,
      prix: 241.2,
    },
    {
      analyse: "Rickettsiose",
      B: 180,
      prix: 241.2,
    },
    {
      analyse: "Salmonellose (Widal et Félix)",
      B: 80,
      prix: 107.2,
    },
    {
      analyse: "Shigellose: I'espèce",
      B: 75,
      prix: 100.5,
    },
    {
      analyse: "Streptozyme",
      B: 100,
      prix: 134,
    },
    {
      analyse: "Sérologie du BK",
      B: 200,
      prix: 268,
    },
  ],
  "Sérologie de la Syphilis": [
    {
      analyse: "VDRL qualitatif",
      B: 20,
      prix: 26.8,
    },
    {
      analyse: "VDRL quantitatif",
      B: 60,
      prix: 80.4,
    },
    {
      analyse: "TPHA qualitatif",
      B: 50,
      prix: 67,
    },
    {
      analyse: "TPHA quantitatif",
      B: 100,
      prix: 134,
    },
    {
      analyse: "Nelson",
      B: 500,
      prix: 670,
    },
    {
      analyse: "FTA Absorbens IgG",
      B: 120,
      prix: 160.8,
    },
    {
      analyse: "IgM",
      B: 280,
      prix: 375.2,
    },
  ],
  "Sérologie parasitaire": [
    {
      analyse: "Ankylostomiase",
      B: 300,
      prix: 402,
    },
    {
      analyse: "Amibiase",
      B: 150,
      prix: 201,
    },
    {
      analyse: "Aspergillose",
      B: 150,
      prix: 201,
    },
    {
      analyse: "Bilharziose",
      B: 150,
      prix: 201,
    },
    {
      analyse: "Hydatidose",
      B: 150,
      prix: 201,
    },
    {
      analyse: "Blastomycose",
      B: 75,
      prix: 100.5,
    },
    {
      analyse: "Candidose",
      B: 200,
      prix: 268,
    },
    {
      analyse: "Coccidiomycose",
      B: 110,
      prix: 147.4,
    },
    {
      analyse: "Cryptococcose",
      B: 110,
      prix: 147.4,
    },
    {
      analyse: "Criptosporidiose",
      B: 150,
      prix: 201,
    },
    {
      analyse: "Cysticércose",
      B: 315,
      prix: 422.1,
    },
    {
      analyse: "Distomatose",
      B: 150,
      prix: 201,
    },
    {
      analyse: "Filariose",
      B: 225,
      prix: 301.5,
    },
    {
      analyse: "Histo asmose",
      B: 110,
      prix: 147.4,
    },
    {
      analyse: "Leichmaniose",
      B: 110,
      prix: 147.4,
    },
    {
      analyse: "Paludisme",
      B: 110,
      prix: 147.4,
    },
    {
      analyse: "Toxocarose",
      B: 315,
      prix: 422.1,
    },
    {
      analyse: "Toxoplasmose IgG",
      B: 100,
      prix: 134,
    },
    {
      analyse: "Toxoplasmose IgM",
      B: 150,
      prix: 201,
    },
    {
      analyse: "Taenia",
      B: 90,
      prix: 120.6,
    },
    {
      analyse: "Trichonose",
      B: 225,
      prix: 301.5,
    },
    {
      analyse: "Trichomonas",
      B: 110,
      prix: 147.4,
    },
    {
      analyse: "Trypanosome",
      B: 110,
      prix: 147.4,
    },
  ],
  "Sérologie Virale": [
    {
      analyse: "Adénovirus",
      B: 110,
      prix: 147.4,
    },
    {
      analyse: "Grippe antigéne B",
      B: 200,
      prix: 268,
    },
    {
      analyse: "Hépatite A / IgG",
      B: 250,
      prix: 335,
    },
    {
      analyse: "Hépatite A / IGM",
      B: 250,
      prix: 335,
    },
    {
      analyse: "Hépatite B / Ag HBS",
      B: 120,
      prix: 160.8,
    },
    {
      analyse: "Hépatite B / Ac anti Hbs",
      B: 250,
      prix: 335,
    },
    {
      analyse: "Hépatite B / Ag Hbe",
      B: 250,
      prix: 335,
    },
    {
      analyse: "Hépatite B / Ac anti Hbe",
      B: 250,
      prix: 335,
    },
    {
      analyse: "Hépatite B / Ac anti Hbc",
      B: 250,
      prix: 335,
    },
    {
      analyse: "Hépatite B / Ac anti Hbc IgM",
      B: 300,
      prix: 402,
    },
    {
      analyse: "Hepatite B ADN par PCR",
      B: 600,
      prix: 804,
    },
    {
      analyse: "Hepatite C / Dépistage",
      B: 300,
      prix: 402,
    },
    {
      analyse: "Hepatite C / test de confirmation",
      B: 600,
      prix: 804,
    },
    {
      analyse: "Hepatite C / ARN par PCR",
      B: 900,
      prix: 1206,
    },
    {
      analyse: "Herpes virus simplex type I (IgG ou IgM)",
      B: 200,
      prix: 268,
    },
    {
      analyse: "Herpes virus simplex type II (IgG ou IgM)",
      B: 200,
      prix: 268,
    },
    {
      analyse: "HIV: HIV1+HIV (1+2) dépistage",
      B: 200,
      prix: 268,
    },
    {
      analyse: "HIV: Westernblot de confirmation",
      B: 600,
      prix: 804,
    },
    {
      analyse: "HIV: Charge virale HIV",
      B: 900,
      prix: 1206,
    },
    {
      analyse: "Mononucléose infectieuse: MNI test",
      B: 50,
      prix: 67,
    },
    {
      analyse: "Mononucléose infectieuse: Paul et Bunelle Davidson",
      B: 80,
      prix: 107.2,
    },
    {
      analyse: "Ac EBNA",
      B: 180,
      prix: 241.2,
    },
    {
      analyse: "Ac VCA",
      B: 180,
      prix: 241.2,
    },
    {
      analyse: "Ac EA",
      B: 180,
      prix: 241.2,
    },
    {
      analyse: "Oreillons (IgG+IgM)",
      B: 180,
      prix: 241.2,
    },
    {
      analyse: "Para influenzae virus",
      B: 110,
      prix: 147.4,
    },
    {
      analyse: "Coxackie",
      B: 100,
      prix: 134,
    },
    {
      analyse: "Poliomyélite",
      B: 110,
      prix: 147.4,
    },
    {
      analyse: "Rotavirus",
      B: 200,
      prix: 268,
    },
    {
      analyse: "Rougeole IgG ou IgM",
      B: 330,
      prix: 442.2,
    },
    {
      analyse: "Rubéole IgG",
      B: 150,
      prix: 201,
    },
    {
      analyse: "Rubéole IgM",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Varicelle et zona",
      B: 200,
      prix: 268,
    },
    {
      analyse: "Virus Syncitial respiratoire",
      B: 200,
      prix: 268,
    },
  ],
  Immunologie: [
    {
      analyse: "Auto anticorps anti nucléaires",
      B: 150,
      prix: 201,
    },
    {
      analyse: "AntiThyroidiens : Microsomaux",
      B: 150,
      prix: 201,
    },
    {
      analyse: "AntiThyroidiens : Thyroglobulines",
      B: 150,
      prix: 201,
    },
    {
      analyse: "Complément total CH50",
      B: 100,
      prix: 134,
    },
    {
      analyse: "C3",
      B: 150,
      prix: 201,
    },
    {
      analyse: "C4",
      B: 150,
      prix: 201,
    },
    {
      analyse: "C1 Inhibiteur estérase",
      B: 150,
      prix: 201,
    },
    {
      analyse: "IgE totales",
      B: 200,
      prix: 268,
    },
    {
      analyse: "IgE spécifiques ou Rast: 1 Allergène",
      B: 180,
      prix: 241.2,
    },
    {
      analyse: "IgE spécifiques ou Rast: à partir du 3ème Allergène (chacun)",
      B: 140,
      prix: 187.6,
    },
    {
      analyse: "IgE spécifiques ou Rast: Test multi Allergènes",
      B: 300,
      prix: 402,
    },
    {
      analyse: "Immunofixation des protides ou Immunoelectrophorèse",
      B: 600,
      prix: 804,
    },
    {
      analyse: "Marqueurs tumoraux",
      B: 250,
      prix: 335,
    },
    {
      analyse: "ACE",
      B: 250,
      prix: 335,
    },
    {
      analyse: "AFP",
      B: 250,
      prix: 335,
    },
    {
      analyse: "PSA",
      B: 300,
      prix: 402,
    },
    {
      analyse: "Ca 125",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Ca 15 3",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Ca 19 9",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Ca 50",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Ca 72 4",
      B: 400,
      prix: 536,
    },
    {
      analyse: "NSE",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Test au latex",
      B: 50,
      prix: 67,
    },
    {
      analyse: "Tréaction de Waaler Rose",
      B: 50,
      prix: 67,
    },
    {
      analyse: "CRP",
      B: 100,
      prix: 134,
    },
    {
      analyse: "Haptoglobine",
      B: 150,
      prix: 201,
    },
    {
      analyse: "Orosomucoides",
      B: 150,
      prix: 201,
    },
    {
      analyse: "Transférrine",
      B: 150,
      prix: 201,
    },
    {
      analyse: "Alpha 1 Antitrypsine",
      B: 150,
      prix: 201,
    },
    {
      analyse: "IgG totales",
      B: 150,
      prix: 201,
    },
    {
      analyse: "IgA totales",
      B: 150,
      prix: 201,
    },
    {
      analyse: "IgM totales",
      B: 150,
      prix: 201,
    },
  ],
  Divers: [
    {
      analyse: "Crèatorrhéé",
      B: 100,
      prix: 134,
    },
    {
      analyse: "Spermogramme",
      B: 100,
      prix: 134,
    },
    {
      analyse: "Spermocytogramme",
      B: 150,
      prix: 201,
    },
    {
      analyse: "Stéatorrhée",
      B: 300,
      prix: 402,
    },
    {
      analyse: "Test de Huhner",
      B: 120,
      prix: 160.8,
    },
  ],
  "Prescriptions pouvant faire l'objet de transmission à l'étranger": [
    {
      analyse: "17 Hydroxyprogestèrone",
      B: 400,
      prix: 536,
    },
    {
      analyse: "25 Hydroxy cholescalciférol",
      B: 450,
      prix: 603,
    },
    {
      analyse: "ACTH",
      B: 400,
      prix: 536,
    },
    {
      analyse: "ADH",
      B: 400,
      prix: 536,
    },
    {
      analyse: "ADN Viral HBV",
      B: 600,
      prix: 804,
    },
    {
      analyse: "Aldostérone",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Aluminium",
      B: 180,
      prix: 241.2,
    },
    {
      analyse: "Androstenédiol",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Anticorps Anti canneaux biliaires",
      B: 200,
      prix: 268,
    },
    {
      analyse: "Anticorps Anti cartilage",
      B: 200,
      prix: 268,
    },
    {
      analyse: "Anticorps Anti cellules nerveuses",
      B: 200,
      prix: 268,
    },
    {
      analyse: "Anticorps Anti ECT",
      B: 500,
      prix: 670,
    },
    {
      analyse: "Anticorps Anti Facteur intrinsèque",
      B: 450,
      prix: 603,
    },
    {
      analyse: "Anticorps Anti organes (autres)",
      B: 200,
      prix: 268,
    },
    {
      analyse: "Anticorps Anti Plaquettes fixées",
      B: 450,
      prix: 603,
    },
    {
      analyse: "Anticorps Anti T3",
      B: 450,
      prix: 603,
    },
    {
      analyse: "Anticorps Anti T4",
      B: 450,
      prix: 603,
    },
    {
      analyse: "Anticorps Viral HCV",
      B: 900,
      prix: 1206,
    },
    {
      analyse: "Ca 50",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Calcitonine",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Carnitine libre",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Charges Virale HIV",
      B: 900,
      prix: 1206,
    },
    {
      analyse: "Citrate dans le sperme",
      B: 200,
      prix: 268,
    },
    {
      analyse: "Complément C2",
      B: 240,
      prix: 321.6,
    },
    {
      analyse: "Complément C5",
      B: 150,
      prix: 201,
    },
    {
      analyse: "Delta 4 Androsténe dione",
      B: 400,
      prix: 536,
    },
    {
      analyse: "DHA",
      B: 400,
      prix: 536,
    },
    {
      analyse: "DHA sulfate",
      B: 400,
      prix: 536,
    },
    {
      analyse: "DHT",
      B: 400,
      prix: 536,
    },
    {
      analyse: "EBV: EARLY ou VCA (IgG+IgM) ou EBNA chacun",
      B: 400,
      prix: 536,
    },
    {
      analyse: "EBV: ECA",
      B: 450,
      prix: 603,
    },
    {
      analyse: "Elastase",
      B: 600,
      prix: 804,
    },
    {
      analyse: "Erytropïoetine",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Fibronectine",
      B: 150,
      prix: 201,
    },
    {
      analyse: "Gastrine",
      B: 400,
      prix: 536,
    },
    {
      analyse: "GH ou STH",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Glucagon",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Hépatite E",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Hépatite Delta",
      B: 300,
      prix: 402,
    },
    {
      analyse: "Hydroxyproline",
      B: 400,
      prix: 536,
    },
    {
      analyse: "IgG 4 (sous classe)",
      B: 200,
      prix: 268,
    },
    {
      analyse: "Il Deoxycortisol",
      B: 300,
      prix: 402,
    },
    {
      analyse: "Médicaments (digoxine théophylline) chacun",
      B: 300,
      prix: 402,
    },
    {
      analyse: "Nelson",
      B: 500,
      prix: 670,
    },
    {
      analyse: "Ostéocalcine",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Parathormone",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Peptide C",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Rénine",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Sérotonine",
      B: 300,
      prix: 402,
    },
    {
      analyse: "Somatomédine C",
      B: 400,
      prix: 536,
    },
    {
      analyse: "TBG",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Te BG",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Test à la STH",
      B: 1200,
      prix: 1608,
    },
    {
      analyse: "Thyrocalcitonine",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Virus (culture)",
      B: 300,
      prix: 402,
    },
    {
      analyse: "Vitamine B12",
      B: 400,
      prix: 536,
    },
    {
      analyse: "Vitamine D",
      B: 450,
      prix: 603,
    },
    {
      analyse: "Autres vitamines (K-A-E) chacune",
      B: 800,
      prix: 1072,
    },
    {
      analyse: "Zinc dans le sperme",
      B: 200,
      prix: 268,
    },
  ],
};

export const listOperationsArray = [
  { value: 10, label: "Blanchiment" },
  { value: 20, label: "Extraction" },
  { value: 30, label: "Implantation" },
  { value: 40, label: "l'Orthopedie" },
  { value: 50, label: "Traitement carie superficielle" },
  { value: 60, label: "Traitement carie moyenne" },
  { value: 70, label: "Soigner une carie profonde" },
  { value: 80, label: "Traitement endodontique racine 2 racines" },
  { value: 90, label: "Traitement endodontique racine 3 racines" },
  { value: 100, label: "Traitement endodontique racine 4 racines" },
  { value: 101, label: "Traitement endodontique racine 5 racines" },
];
export const Younger = [
  [
    "165.3,34.3 162.8,35.8 159.6,38.5 157.7,40.4 154.5,45.1 151.8,50.5 149.9,56.3 148.7,62.2 148.4,67.7 149,72.5 150.5,76.3 151.7,77.6 153.1,78.6 157.1,80.5 164.8,82.7 170,83.3 172.9,83.3 179.9,82.1 186.9,79.9 192.5,77.1 194.3,75.7 195.3,74.4 196.8,70.9 197.5,66.7 197.3,62 195.8,54.6 192.7,47.3 189.8,42.9 188.1,40.9 185.8,38.7 180.2,35.4 174.1,33.6 168.1,33.6 165.3,34.3 165.3,34.3",
    5,
  ],
  [
    "221.2,35.1 217.8,36.9 212.4,42 209.7,45.7 207.2,50.8 204,60.4 202.8,66.3 202.7,68.7 203.1,71.1 205.9,75.4 211,78.8 217.6,81.4 225.2,82.8 233.1,83.1 240.6,82 247.1,79.4 249.7,77.6 250.8,76.2 251.9,71 252,66.7 251.8,62.4 250.5,54.4 248.1,47.5 244.6,41.8 240.3,37.4 235.4,34.5 229.9,33.3 224.2,34 221.2,35.1 221.2,35.1",
    6,
  ],
  [
    "114.7,56.1 113.3,57.9 111.1,62.5 109.9,68.1 109.4,74.5 109.8,80.9 111,87.1 113,92.6 115.6,96.8 117.2,98.3 119.2,99.3 124.8,99.8 131.5,98.7 137.9,96 140.7,94.1 142,92.9 143.9,89.6 144.9,85.4 145,80.7 144.3,75.6 142.7,70.4 140.4,65.2 137.4,60.4 135.6,58.1 133.2,55.5 128.4,53.1 124.9,52.8 121.4,52.7 116.9,54.1 114.7,56.1 114.7,56.1",
    4,
  ],
  [
    "269.5,54.3 267.2,55.8 262.7,61 260.4,64.7 258.1,69.1 256.2,76.6 256,81.5 256.1,86 257.5,91.2 259.1,92.9 260.7,94.3 264.9,96.8 269.7,98.7 274.3,99.8 276.3,100 279.3,99.8 284,97.7 287.3,93.1 289.8,85.2 290.8,79.9 291.6,74.3 291.3,67.1 290.1,63.6 289.1,61.2 286.7,56.9 285.6,55.6 284,54.4 280.2,53 275.8,52.6 271.5,53.4 269.5,54.3 269.5,54.3",
    7,
  ],
  [
    "84,83.3 81.8,84.3 78.4,86.8 76.5,90.5 75.7,95.7 75.6,99.1 75.9,105.7 76.4,110 76.9,112.2 77.2,113.6 78.5,115.7 81.5,119.3 83.4,121.2 87.4,124.1 91.7,125.7 96,126 100.1,125.2 103.9,123.2 107.1,120 109.6,115.8 110.5,113.3 111.1,109.9 110.4,102 107.8,93.9 103.7,87.4 101.3,85.2 99.5,84.1 95.3,82.6 90.7,82.1 86.2,82.7 84,83.3 84,83.3",
    3,
  ],
  [
    "304.7,82.3 302.9,82.9 299.6,85 296.6,88.2 294,92.2 291.2,99.2 290,106.4 290.3,111 290.8,113.1 291.7,115.6 294.2,119.9 297.2,123.1 300.7,125.2 304.5,126.1 308.6,125.8 312.8,124.3 316.9,121.6 318.9,119.7 320.9,117.6 323.3,114.4 323.5,113.7 323.3,113.2 323.7,111.7 324.3,110.9 324.9,109.5 325.9,104.1 326,100.8 325.9,96.5 324.4,90.8 322.7,88.4 320.9,86.4 316.9,83.4 312.4,81.9 307.4,81.8 304.7,82.3 304.7,82.3",
    8,
  ],
  [
    "57.7,114.9 56.5,115.8 54.1,118.4 53.3,119.9 51,124.6 47.3,131.3 44.9,135.7 43.1,141.9 43.3,145.1 43.7,147.6 45,152.3 46.9,156.2 49.3,159 50.5,159.9 52.5,160.7 58,161.8 64.5,162.3 70.7,161.9 73.3,161.3 76.2,160.3 81.7,157 86.2,152.5 89.3,147.4 90,144.8 90.3,142.3 89.5,137.2 87,131.7 82.6,125.8 79.6,122.7 76.4,119.6 70.7,115.3 65.5,113.4 60.4,113.9 57.7,114.9 57.7,114.9",
    2,
  ],
  [
    "330,114.9 326.5,117.5 319.3,125 313.4,133.7 310.8,139.6 310.1,142.8 310.3,144 311,146.2 313.1,150.5 315.9,154.4 319.3,157.5 321.1,158.8 323.9,160.3 330.6,161.7 335.3,161.9 339.6,161.8 346.1,161.3 350.5,159.9 353.5,157.4 354.7,155.6 355.9,153.3 357.1,148.2 356.9,142.7 355.2,136.6 353.7,133.3 350.8,127.7 348.9,124.7 347.3,122.3 344.9,118.7 343.2,116.3 339.7,114 337.3,113.7 335.3,113.7 331.4,114.3 330,114.9 330,114.9",
    9,
  ],
  [
    "39.2,164.1 36.9,164.8 32.9,166.7 31.7,167.7 30.1,170.6 26.8,180.2 25.7,185.2 25,188.2 24,190.8 23.4,192.4 22.6,196.8 22.6,201.8 23.3,206.2 23.9,207.7 25.1,209.5 28.7,212.4 34.2,214.3 42,215.4 46.9,215.7 54,216 60,215.4 62.6,214.3 63.9,213.5 66.6,210.9 71.4,203.6 72.9,199.3 73.9,193.9 74.2,180.1 73.5,175.7 72.7,174.4 69.5,171.3 65.1,168.3 61,166.3 59.3,166 58.1,165.7 56.7,165.1 53.5,164.1 43.8,163.5 39.2,164.1 39.2,164.1",
    1,
  ],
  [
    "344.9,165.9 341.1,167.2 334.6,170.7 331.7,173.1 326.3,178.2 327.1,189.9 327.4,194.4 328.6,201.7 330.7,207.2 334,211.6 336.1,213.7 337.4,214.7 340,216.1 345.5,216.9 352,217 356.6,216.9 364,216.1 369.6,214.4 374,211.5 376,209.5 377.1,208.2 377.9,206.9 377.7,206.7 377.3,206.9 376.8,207.1 377,206.6 377.7,205.9 378.9,204.8 379.4,202.5 378.7,201 378.1,199.7 377.7,197.2 377.9,196.2 378.1,195.4 377.7,194.9 377.1,195.1 376.4,195.4 376.1,194.8 376.4,193.9 376.6,192.9 375.9,191.2 374.9,190.5 374.1,189.9 373.8,189.1 374.4,189 375,188.9 375.9,188.1 376,187.5 375.9,187.1 375.3,186.7 374.8,186.9 374.3,186.9 373.7,185.3 373.6,183.9 373.4,181.4 372,175.8 369.7,170.7 367.1,167.1 365.7,166.2 363.4,165.5 358.5,164.6 353.3,164.5 347.8,165.2 344.9,165.9 344.9,165.9",
    10,
  ],
  [
    "38,306.8 35.6,307.5 30.8,309.9 28.9,311.2 26.9,313.1 25.1,317.9 24.9,322.1 25.1,329.1 26.2,337.4 27.4,340.5 28,341.1 28.5,341.4 29.2,342.5 29.3,343.2 29.7,344.1 31.9,347.1 33.5,348.8 34.8,350 37.1,351.6 42,352.6 47.7,352.7 53.3,352.5 61,350.7 64.9,348.8 68.2,346.7 72.9,341.5 75.3,335.2 75.2,328.1 74.1,324.4 73,320.3 72.8,318.3 71.7,316.2 68.3,312 66.6,310.1 64,307.7 59.1,306.2 53.3,305.9 49,305.8 40.9,306.3 38,306.8 38,306.8",
    20,
  ],
  [
    "338.7,307.7 336.3,309.2 332.3,313.6 329.4,319.5 327.8,326.9 327.5,331.1 327.3,336.3 328.2,340.8 330.1,343.1 331.5,344.5 333.1,346 337.1,348.6 343.9,351.4 353.7,353.2 360.6,352.8 364.5,351.7 366.1,350.8 367.8,349.5 370.9,346 373.2,341.8 374.1,338.3 373.9,337.1 373.6,336.6 373.8,336.2 374.3,336.4 374.9,336.6 376.1,336 376.5,335.3 376.7,334.5 375.9,333.5 374.9,333.3 373.8,333.2 373.8,332.6 374.8,332 375.8,331 376.9,326.8 377.1,323.3 376.9,319.4 375.4,314.4 373.6,312.1 372.3,310.9 368.8,308.9 362.3,306.6 352.2,305.3 344.8,305.8 340.5,306.9 338.7,307.7 338.7,307.7",
    11,
  ],
  [
    "60,355.2 57.1,356.2 52.9,358.7 50.3,362.5 48.7,368.9 48,373.3 47.7,376.3 47.6,381.7 48.3,386.4 49.9,390.4 52.2,393.8 55.3,396.4 59.2,398.3 63.8,399.4 66.4,399.7 70.8,399.9 76.4,398.1 79.7,395.3 81.9,393.3 84.9,389.7 85.3,388.5 85.4,387.8 86.1,386.8 86.5,386.7 87.1,386.3 88.6,384.2 89.3,382.7 90.8,379.8 92,378.7 92.6,378.2 92.9,375.3 92.3,370.8 90.9,366.4 90,364.7 87.3,361.2 80.8,356.2 73.1,353.7 64.5,354 60,355.2 60,355.2",
    19,
  ],
  [
    "323.3,354.9 321.3,355.8 317.5,358.1 314.3,361.3 311.7,365.4 310.5,367.7 309.2,371.1 309.2,375.5 310.7,378.4 313,383.1 315.2,387.5 317.4,390.8 324,397.4 326.4,398.8 330.8,399.4 338.8,399.2 345.4,397.1 350.2,393.3 351.9,390.8 352.9,388 354.1,380.8 353.9,372.7 352.4,365.2 351.2,362.1 349.7,359.3 345.6,356.2 342,355.1 336.5,353.9 327.4,353.9 323.3,354.9 323.3,354.9",
    12,
  ],
  [
    "95.1,392.9 93.5,393.5 89.7,396 85.8,399.7 82.6,403.8 81.6,405.7 80.5,409.3 80.1,417.7 81.5,426.5 83.6,432 85.5,434.7 86.5,435.6 87.9,436.3 92.7,437.2 95.6,437.3 99.4,437.2 104.4,435.3 107.1,432.9 109.4,430.3 113.1,423.5 115.1,415.7 115.3,407.8 114.5,404 112.7,401.2 109.1,397.1 107.4,395.4 104.5,393.2 101.5,392.3 97.6,392.5 95.1,392.9 95.1,392.9",
    18,
  ],
  [
    "296,393.7 294.5,394.8 291.1,398.5 289.6,400.7 288.1,403.7 287,409.4 287.2,413.3 288,419.2 289.9,426.4 291.8,430.1 294.2,433 297.2,435.2 300.6,436.6 304.7,437.2 306.9,437.3 310.4,437 314.7,435.4 316.9,433.6 319.5,429.6 321.2,422 321.5,417.2 321.3,413.1 319.9,406 317.1,400.3 312.9,396.1 310.4,394.7 308.1,393.7 304.1,392.4 300.8,392.2 297.6,393 296,393.7 296,393.7",
    13,
  ],
  [
    "120.4,427.9 119.6,431.3 118.9,438.8 119.3,446.4 120.7,453.1 121.9,455.7 122.8,457.4 125.2,460.2 129.5,463.2 134.4,464.7 137.7,464.7 140.9,464 144,462.5 145.3,461.5 147,459.6 150,454.6 152.3,448.2 153.6,441.1 153.9,437.5 153.8,433.5 152.1,429.1 150,427.3 148,426.1 143,423.8 133.9,421.4 127.9,420.8 122.5,420.7 120.4,427.9 120.4,427.9",
    17,
  ],
  [
    "266,422.1 259.6,424.4 253.5,427.1 247.7,429.9 248.4,438 249.2,445.2 251.6,455.7 254.4,460.6 256.8,462.7 259.7,464 263.3,464.5 265.3,464.5 267.7,464.4 271.9,463.7 275.3,462.2 278,459.9 280.1,456.8 281.5,452.7 282.4,444.8 282.4,438.1 282.1,431.8 280.7,424.7 279.5,422.8 278.4,421.7 276.3,420.5 271.5,420.7 266,422.1 266,422.1",
    14,
  ],
  [
    "164.8,439.3 163.9,440.5 162.7,443.5 162.4,445.1 162.2,448.8 161.9,452.7 161.8,456.5 163.2,463.9 166.1,470.4 170.4,475.4 172.9,477.1 174.4,477.6 178.2,478.1 182.5,477.6 186.7,476.4 188.4,475.5 189.6,474.5 192,471.7 194.9,465.8 197.5,456.6 198.1,449.9 197.7,446 197.2,444.4 196.4,442.9 193.2,440.4 188.1,438.7 181.2,437.7 177.1,437.5 172.1,437.5 166.3,438.3 164.8,439.3 164.8,439.3",
    16,
  ],
  [
    "209.2,440.4 204.7,443.3 205.1,453.3 205.4,457.5 207,464.9 209.7,470.7 213.6,474.8 215.9,476.1 217.3,476.9 219.1,478.4 219.2,478.9 219.2,479.2 220.5,479.2 221.7,478.8 224.3,478.1 225.7,478.3 226.5,478.4 229.3,477 232.7,474.1 235.9,470.6 236.9,468.9 237.9,466.3 239.1,458.2 239.3,448.9 238.5,441.6 237.6,439.7 236.2,438.7 230.2,437.7 224.8,437.6 219,437.7 211.9,439 209.2,440.4 209.2,440.4",
    15,
  ],
];

export const Older = [
  [
    "254.5,44.5 259.9,43.8 267.3,44 271.9,45.1 276.3,46.8 280.3,49.3 285.7,54.3 289,58.5 292.3,66.4 295,74.5 295.4,83.2 295.2,100.4 294.5,109 291.4,110.4 284.9,112.4 281.5,113 276,113.8 265,114.9 254,115.2 243,114.6 237.5,114 234.6,113 232,111.5 231.3,106.2 230.5,95.4 230.5,90 229.8,84 230.4,72.7 232.8,64.9 235.2,60.1 240.3,53.2 244.5,49 249.5,46.7 254.5,44.5 254.5,44.5",
    11,
  ],
  [
    "322.5,44.5 326.4,44.1 333.7,44.1 340.3,45.3 346.1,47.6 351.2,50.9 355.5,55.4 359,61 361.9,67.7 363,71.5 363.4,80.5 363.4,98.5 363,107.5 362.8,108.9 361.9,111.3 360.3,112.9 358,113.8 356.5,114 351,114.6 340,115.2 329,115 318,113.9 312.5,113 309,112.3 302.2,110.1 299,108.5 298.6,100.3 298.6,83.8 299,75.5 300.1,70.1 303.8,60.7 309.7,52.9 317.7,46.9 322.5,44.5 322.5,44.5",
    21,
  ],

  [
    "211.5,59.5 213.1,59.5 216.1,60 218.7,61.2 221,63.2 222,64.5 224.1,68.9 226,73.5 227,82.5 227.5,100.5 227,109.5 223,112.1 214.2,115.9 209.5,117 202.3,118.4 187.8,119.7 180.5,119.5 180.4,110.5 180.9,92.5 181.5,83.5 183.5,79.6 185,75.5 198.1,67.2 211.5,59.5 211.5,59.5",
    12,
  ],
  [
    "377.5,59.5 381.5,60.2 389,63 392.5,65 400.8,70.2 409,75.5 410.7,79.7 413,83.5 413.5,101.5 413.5,119.5 408.3,119.6 397.9,119 387.6,117.4 377.5,114.7 372.5,113 369.6,111.5 367,109.5 366.6,100.7 367.1,83.2 368,74.5 368.6,72.2 370.3,68 372.7,64.3 375.7,61 377.5,59.5 377.5,59.5",
    22,
  ],
  [
    "175.5,80.5 176.7,90.5 177.9,111 178,121.5 182.4,123.3 186.5,125.5 185,128.5 181.2,134 179,136.5 178,139.5 177.5,142.5 163,145.6 148.5,149 145.5,149.3 140,148.1 137.5,146.5 137,138.5 136.5,130.5 136.5,125.9 137.3,116.9 138,112.5 147,103.5 156.5,95 161.5,91.6 171,84.4 175.5,80.5 175.5,80.5",
    13,
  ],
  [
    "416.5,80.5 426.9,87.7 446.7,103.7 456,112.5 457,121 457.3,138 456.5,146.5 454.6,147.6 450.6,149.1 448.5,149.5 432.9,146.1 417.5,142 415.8,138.6 411.6,132.3 409,129.5 407.8,127.2 406.5,125 411.2,123.1 416,121.5 416.5,101 416.5,80.5 416.5,80.5",
    23,
  ],
  [
    "131.5,118.5 132.6,126 134.1,141.2 134.5,149 139.2,151.4 144,153.5 159.7,149.9 175.5,146.5 175.1,149.6 173.8,155.3 171.8,160.5 169.1,164.9 165.8,168.8 161.7,172.1 156.9,174.7 151.5,176.7 148.5,177.5 129.5,175.8 110.5,174 105.3,167.8 100,161.5 99.6,160.2 99.6,157.8 100,156.5 107.1,146.4 122.9,127.4 131.5,118.5 131.5,118.5",
    14,
  ],
  [
    "460.5,118.5 464.3,121.4 471.6,127.9 475,131.5 484.8,143.3 494,155.5 494.4,157 494.4,160 494,161.5 488.8,167.8 483.5,174 464.8,175.8 446,177.5 443,177.1 437.4,175.4 432.4,172.7 428,168.8 426,166.5 423.3,162 419,152.5 417.5,147.5 418.8,147 420,146.5 435,150.1 450,153.5 454.8,151.4 459.5,149 460.1,141.4 460.6,126.2 460.5,118.5 460.5,118.5",
    24,
  ],
  [
    "94.5,163.5 96,163.5 97.5,164 103.8,171.3 110,178.5 110.9,177.9 112,177.5 132.2,179.6 152.5,181.5 152.5,185.8 151.2,193.9 148.2,201.3 143.5,207.9 140.5,211 126.9,210.5 99.9,208.3 86.5,206.5 81.3,199.8 76.5,193 80.4,185.3 89.4,170.5 94.5,163.5 94.5,163.5",
    15,
  ],
  [
    "496.5,163.5 498.2,163.6 500.9,165.1 502,166.5 506.5,172.9 514.2,186.4 517.5,193.5 512.7,200.1 507.5,206.5 494.3,208.3 467.8,210.5 454.5,211 451.9,209.1 447.6,204.7 444.5,199.6 442.5,193.7 442,190.5 441.5,186 441.5,181.5 462,179.6 482.5,177.5 483.3,177.9 484,178.5 490.4,171.1 496.5,163.5 496.5,163.5",
    25,
  ],
  [
    "519.5,196.5 522.5,200.7 527.8,209.7 530,214.5 535.1,226.8 540.5,239 540.1,240.1 539.5,241 533.9,243.8 528.5,247 498.5,249.5 468.5,252.5 466.2,249.9 462.2,244.4 459,238.4 456.8,231.9 456,228.5 455.3,225.3 454.6,218.8 454.5,215.5 480.5,213.2 506.5,211 510.4,208 516.9,200.7 519.5,196.5 519.5,196.5",
    26,
  ],
  [
    "72.5,197.5 79.5,203.9 86.5,210.5 113,213.1 139.5,215.5 139.1,220.6 137.3,230.4 134,239.6 129.4,248.3 126.5,252.5 96.5,249.5 66.5,247 63,245.4 56.5,241.4 53.5,239 57.7,228.4 67.2,207.6 72.5,197.5 72.5,197.5",
    16,
  ],
  [
    "51.5,243.5 57.6,246.5 63.5,250 79.2,251.7 110.7,254.4 126.5,255.5 125.9,261.6 123.7,273.6 122,279.5 120.8,282 117.5,286.2 115.5,288 84,285.8 52.5,283 47.1,279.8 41.5,277 40.9,276.1 40.5,275 45.8,259.1 51.5,243.5 51.5,243.5",
    17,
  ],
  [
    "540.5,243.5 541.9,243.7 543,244.5 548.5,259.9 553.5,275.5 550.4,277.7 543.9,281.4 540.5,283 509,285.9 477.5,288 475.2,285.5 471.9,279.8 471,276.5 469.7,271.3 468,260.8 467.5,255.5 483.1,254.4 514.6,251.7 530.5,250 535.7,246.9 540.5,243.5 540.5,243.5",
    27,
  ],
  [
    "39.5,279.5 46,283.2 52.5,287 84,289.4 115.5,292 115.6,295.2 115.2,301.1 113.9,306.1 111.7,310.3 108.5,313.6 104.5,316.2 99.6,317.9 93.8,318.8 90.5,319 83.7,319.4 70.4,319.2 57.1,317.7 44,314.9 37.5,313 35.5,311.9 33,308.7 32.5,306.5 35.7,292.9 39.5,279.5 39.5,279.5",
    18,
  ],
  [
    "553.5,279.5 554.3,279.8 555,280.5 558.5,293.7 561.5,307 560,309.3 556,312.8 553.5,314 545.8,316 530.4,318.6 514.9,319.3 499.3,318.2 491.5,317 489.7,316.4 486.4,314.7 483.8,312.3 481.8,309.3 481,307.5 479,301.3 477.5,295 477.8,294.1 478.8,292.6 479.5,292 494.8,290.5 525.3,288.3 540.5,287.5 547.2,283.7 553.5,279.5 553.5,279.5",
    28,
  ],
  [
    "43.5,459.5 57.8,460.8 72,462.5 79.1,462 93.4,461.7 100.5,462 102.3,464.6 105.3,470.2 107.5,476 108.7,482.3 109,485.5 109.4,488.7 109.4,495.3 109,498.5 107.3,500.8 105.5,503 79,503.5 52.5,504.5 47.5,509 42.5,513.5 40.7,518.1 38.5,522.5 37.8,523.1 36.3,523.4 35.5,523 33.2,514.3 29.7,496.5 28.5,487.5 29.2,483.3 31.6,475.5 35.3,468.5 40.4,462.3 43.5,459.5 43.5,459.5",
    48,
  ],
  [
    "540.5,459.5 543.6,459.4 549.6,460.1 552.5,461 555.1,463.8 559.5,469.8 562.8,476.5 564.9,483.7 565.5,487.5 564.2,496.5 560.7,514.2 558.5,523 557.7,523.4 556.2,523.1 555.5,522.5 553,517.5 550.5,512.5 546,508.5 541.5,504.5 515,503.5 488.5,503 486.7,500.8 485,498.5 484.7,491.6 486.2,478.1 488,471.5 488.9,468.8 491.7,464.1 493.5,462 500.6,461.7 514.9,462 522,462.5 526.8,462.4 536.1,460.9 540.5,459.5 540.5,459.5",
    38,
  ],
  [
    "53.5,506.5 82,506.5 110.5,507 113,511.9 116.8,522.1 118,527.5 119.2,534.7 120.5,549.2 120.5,556.5 93,556.5 65.5,556.5 65.5,558 65,559.5 61.3,562.2 58,565.5 57.5,570 57,574.5 53.8,571.1 48.5,564.1 44.5,557 41.9,549.6 40.6,541.9 40.6,534.1 42,526 44.7,517.7 46.5,513.5 50.3,510.2 53.5,506.5 53.5,506.5",
    47,
  ],
  [
    "491.5,507.5 503.7,506.8 528.2,506.6 540.5,507 543.9,510.4 547.5,513.5 550.1,519.4 553.6,531.6 554.5,538 552.9,545.5 548.6,560.2 546,567.5 543.3,572.3 540,576.8 538.3,578 537,577.7 536.2,576 535.8,570.8 536,565.5 532.7,562.2 529,559.5 528.5,558 528.5,556.5 501,556.5 473.5,556.5 473.6,550.6 474.7,539 477.2,527.8 481.1,516.8 483.5,511.5 485.6,510.5 490.1,509 492.5,508.5 492.2,507.8 491.5,507.5 491.5,507.5",
    37,
  ],
  [
    "68.5,559.5 96.5,559.5 124.5,560 127,564.6 131.2,574.1 134.2,584 136,594.3 136.5,599.5 121,599.5 105.5,600 102.3,602.5 95.3,606.3 91.5,607.5 91.5,619 91.5,630.5 88,630.1 81.8,627.6 79,625.5 73.8,618.7 64.8,604.2 61,596.5 60.6,588.7 60.8,573.2 61.5,565.5 65,562.5 68.5,559.5 68.5,559.5",
    46,
  ],
  [
    "473.5,559.5 499.5,559.5 525.5,560 529.5,563 533,566.5 533.5,575 533,592 532,600.5 523.7,615.1 515,629.5 512.3,631.8 506.1,634.3 502.5,634.5 502.5,621 502.5,607.5 498.7,606.3 491.7,602.5 488.5,600 473,599.5 457.5,599.5 458.4,594 461.2,583.4 465.2,573.4 470.4,564 473.5,559.5 473.5,559.5",
    36,
  ],
  [
    "107.5,602.5 122.5,602.5 137.5,603 140.2,604.4 144.9,608.2 147,610.5 149.7,614 154.5,621.5 156.5,625.5 156.1,626.6 154.6,628.1 153.5,628.5 146.8,629.7 133.5,632.7 127,634.5 126.5,647.8 126,661 125.8,661.1 124.5,661.5 122.4,661.9 118.2,661.9 114.2,661 110.4,659.2 108.5,658 104.5,654.9 97.8,647.7 95,643.5 94.6,635.5 94.6,619.5 95,611.5 101.4,607.1 107.5,602.5 107.5,602.5",
    45,
  ],
  [
    "456.5,602.5 471.5,602.5 486.5,603 492.8,607.2 499,611.5 500.2,615.8 501.6,624 501.6,631.6 500.3,638.6 497.6,644.9 493.6,650.6 488.2,655.6 481.4,660 477.5,662 475.5,662.4 471.5,662.1 469.5,661.5 468.9,660.9 468.6,660 468.5,661 467.8,647.8 467,634.5 466.3,633.8 465.5,633 453,630.9 440.5,628.5 439.4,628.1 437.9,626.6 437.5,625.5 439.2,622 443.2,615.6 447.9,609.8 453.4,604.8 456.5,602.5 456.5,602.5",
    35,
  ],
  [
    "154.5,631.5 157.7,632 163.6,633.9 168.7,637.2 173.1,641.7 175,644.5 175.7,645.9 176.5,648.9 176.5,650.5 172,651.1 167.5,652 166.9,652.9 166.5,654 167.2,660.9 167.2,674.6 166.5,681.5 161.9,685.6 157.5,690 155.1,691 150.1,692 147.5,692 138.6,686.5 130,680.5 129.5,658.5 129.5,636.5 142.1,634.3 154.5,631.5 154.5,631.5",
    44,
  ],
  [
    "432.5,631.5 440.5,632.5 456.5,635 464.5,636.5 464.5,658.5 464,680.5 455.1,686.7 446,692.5 441.2,691.3 436.5,690 432.1,685.6 427.5,681.5 426.8,674.6 426.8,660.9 427.5,654 427.1,652.9 426.5,652 422,651.1 417.5,650.5 417.6,648.6 418.6,645.1 419.5,643.5 422.4,640.1 428.9,634.1 432.5,631.5 432.5,631.5",
    34,
  ],
  [
    "176.5,653.5 180.4,653.5 188.2,654.4 195.7,656.1 202.9,658.8 206.5,660.5 207.2,668.7 207.4,685.2 207,693.5 205.7,696.2 202.7,700.9 199.4,704.5 195.7,707 191.7,708.5 187.2,708.8 182.4,708.1 177.2,706.3 174.5,705 172.7,702.8 171,700.5 170.5,677.5 170.5,654.5 172.1,654.6 175.1,654.1 176.5,653.5 176.5,653.5",
    43,
  ],
  [
    "410.5,653.5 416.8,654 423.5,654.5 423.5,676.5 423,698.5 422.5,700.3 420.7,703.6 419.5,705 417.1,706.3 412.5,708.1 408.1,709 403.9,708.9 400,707.8 396.2,705.8 392.8,702.8 389.5,698.8 388,696.5 387.3,691.7 386.5,681.9 386.5,677 387,668.8 387.5,660.5 393.1,658 404.6,654.5 410.5,653.5 410.5,653.5",
    33,
  ],
  [
    "214.5,668.5 218.8,668.5 227.1,669.2 235.3,671 243.1,673.7 247,675.5 247.4,684 247.4,701 247,709.5 245.1,712.9 239.9,718.1 236.5,720 232.2,720.7 226.3,720.6 222.8,719.6 218.1,716.8 213,710.6 211,706.5 210.5,688 210.5,669.5 211.6,669.6 213.6,669.1 214.5,668.5 214.5,668.5",
    42,
  ],
  [
    "368.5,668.5 376,668.7 383.5,669.5 383.5,688 383,706.5 381.9,709 379.3,713.4 376.3,716.8 373,719.2 369.3,720.6 365.3,721.1 360.8,720.6 356,719.1 353.5,718 350,714.5 347,710.5 346.6,701.7 346.6,684.3 347,675.5 352.2,673 362.9,669.5 368.5,668.5 368.5,668.5",
    32,
  ],
  [
    "264.5,675.5 276,675.5 287.5,676 291.1,676.9 294.5,678.5 295.2,686.2 295.4,701.7 295,709.5 293.8,711.9 291.1,716.1 288.1,719.4 284.6,721.9 280.8,723.6 276.6,724.5 272.1,724.5 267.1,723.7 264.5,723 260.6,720.1 254.3,712.8 252,708.5 251.1,702 250.6,689 251,682.5 252,680.6 253.5,679 259,677.1 264.5,675.5 264.5,675.5",
    41,
  ],
  [
    "307.5,675.5 319,675.5 330.5,676 333.1,676.4 338.1,677.9 340.5,679 342,680.6 343,682.5 343.4,689 342.9,702 342,708.5 340.6,711.3 337.4,716.1 333.9,719.8 330,722.4 325.7,724 321,724.5 315.9,723.9 310.4,722.2 307.5,721 304.6,718.3 300.3,712.2 298.1,705.5 297.9,698 298.5,694 299,686.3 299.5,678.5 303.5,676.8 307.5,675.5 307.5,675.5",
    31,
  ],
];
