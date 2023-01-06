// AirPort_Code : A_P_Name, City, Country
let airports = {
    IXA: "Agartala Airport (Singerbhil Airport),Agartala,India",
    AGX: "Agatti Island Airport,Agatti Island,India",
    AGR: "Agra Airport/Agra Air Force Station,Agra,India",
    AMD: "Sardar Vallabhbhai Patel International Airport,Ahmedabad,India",
    AJL: "Aizawl Airport,Aizawl,India",
    AKD: "Akola Airport,Akola,India",
    IXD: "Allahabad Airport / Bamrauli Air Force Base,Allahabad,India",
    IXV: "Along Airport,Along, Arunachal Pradesh,India",
    ATQ: "Sri Guru Ram Dass Jee International Airport,Amritsar,India",
    IXI: "Lilabari Airport (North Lakhimpur Airport),Assam,India",
    IXU: "Aurangabad Airport (Chikkalthana Airport),Aurangabad, Maharashtra,India",
    IXB: "Bagdogra Airport,Bagdogra,India",
    BLR: "Bengaluru International Airport,Bangalore,India",
    BEK: "Bareli Airport,Bareli,India",
    IXG: "Belgaum Airport,Belgaum,India",
    BEP: "Bellary Airport,Bellary,India",
    BUP: "Bhisiana Air Force Base,Bhatinda,India",
    BHU: "Bhavnagar Airport,Bhavnagar,India",
    BHO: "Bhopal Airport,Bhopal,India",
    BBI: "Biju Patnaik Airport,Bhubaneswar,India",
    BHJ: "Bhuj Airport / Bhuj Rudra Mata Air Force Base,Bhuj, Kutch, Gujarat,India",
    BKB: "Nal Airport,Bikaner,India",
    PAB: "Bilaspur Airport,Bilaspur, Chhattisgarh,India",
    CBD: "Car Nicobar Air Force Base,Car Nicobar,India",
    IXC: "Chandigarh Airport,Chandigarh,India",
    MAA: "Chennai International Airport (Madras International Airport),Chennai (Madras),India",
    CJB: "Coimbatore International Airport,Coimbatore,India",
    COH: "Cooch Behar Airport,Cooch Behar,India",
    CDP: "Cuddapah Airport,Cuddapah,India",
    GOI: "Goa International Airport (Dabolim Airport),Dabolim, Goa,India",
    NMB: "Daman Airport,Daman,India",
    DEP: "Daporijo Airport,Daporijo, Arunachal Pradesh,India",
    DED: "Dehradun Airport,Dehradun, Uttarakhand,India",
    DEL: "Indira Gandhi International Airport,Delhi,India",
    DBD: "Dhanbad Airport,Dhanbad,India",
    DIB: "Dibrugarh Airport (Chabua Airport),Dibrugarh,India",
    DMU: "Dimapur Airport,Dimapur,India",
    DIU: "Diu Airport,Diu,India",
    CCU: "Netaji Subhas Chandra Bose International Airport,Dum Dum,India",
    IXY: "Kandla Airport (Gandhidham Airport),Gandhidham / Kandla,India",
    GAY: "Gaya Airport,Gaya,India",
    GOP: "Gorakhpur Airport,Gorakhpur,India",
    GUX: "Guna Airport,Guna,India",
    GAU: "Lokpriya Gopinath Bordoloi International Airport,Guwahati,India",
    GWL: "Gwalior Airport,Gwalior,India",
    HSS: "Hissar Airport,Hissar,India",
    HBX: "Hubli Airport,Hubli,India",
    BPM: "Begumpet Airport,Hyderabad,India",
    HYD: "Rajiv Gandhi International Airport (succeeded Begumpet Airport),Hyderabad,India",
    IMF: "Tulihal Airport,Imphal,India",
    IDR: "Devi Ahilyabai Holkar International Airport,Indore, Madhya Pradesh,India",
    JLR: "Jabalpur Airport,Jabalpur, Madhya Pradesh,India",
    JGB: "Jagdalpur Airport,Jagdalpur,India",
    JAI: "Jaipur Airport (Sanganer Airport),Jaipur / Sanganer,India",
    JSA: "Jaisalmer Airport,Jaisalmer,India",
    IXJ: "Jammu Airport (Satwari Airport),Jammu,India",
    JGA: "Jamnagar Airport,Jamnagar, Gujurat,India",
    IXW: "Sonari Airport,Jamshedpur,India",
    JDH: "Jodhpur Airport,Jodhpur, Rajasthan,India",
    JRH: "Jorhat Airport,Jorhat,India",
    IXH: "Kailashahar Airport,Kailashahar,India",
    IXQ: "Kamalpur Airport,Kamalpur,India",
    DHM: "Gaggal Airport,Kangra, Himachal Pradesh,India",
    KNU: "Kanpur Airport,Kanpur, Uttar Pradesh,India",
    IXK: "Junagadh Airport (Keshod Airport),Keshod,India",
    HJR: "Khajuraho Airport,Khajuraho,India",
    IXN: "Khowai Airport,Khowai,India",
    KLH: "Kolhapur Airport,Kolhapur,India",
    KTU: "Kota Airport,Kota,India",
    CCJ: "Calicut Airport,Kozhikode (Calicut),India",
    KUU: "Bhuntar Airport (Kullu Airport),Kullu / Bhuntar, Himachal Pradesh,India",
    LTU: "Latur Airport,Latur, Maharashtra,India",
    IXL: "Leh Kushok Bakula Rimpochee Airport,Leh,India",
    LKO: "Amausi Airport,Lucknow,India",
    LUH: "Ludhiana Airport,Ludhiana,India",
    IXM: "Madurai Airport,Madurai,India",
    LDA: "Malda Airport,Malda,India",
    IXE: "Mangalore International Airport,Mangalore,India",
    MOH: "Mohanbari Airport,Mohanbari,India",
    BOM: "Chhatrapati Shivaji International Airport,Mumbai,India",
    MZA: "Muzaffarnagar Airport,Muzaffarnagar,India",
    MZU: "Muzzafarpur Airport,Muzzafarpur,India",
    MYQ: "Mysore Airport,Mysore,India",
    NAG: "Dr.Babasaheb Ambedkar International Airport,Nagpur,India",
    NDC: "Nanded Airport,Nanded,India",
    ISK: "Ozar Airport,Nashik,India",
    COK: "Cochin International Airport (Nedumbassery Airport),Nedumbassery, Kerala,India",
    NVY: "Neyveli Airport,Neyveli,India",
    OMN: "Osmanabad Airport,Osmanabad,India",
    IXT: "Pasighat Airport (Passighat Airport),Pasighat (Passighat),India",
    IXP: "Pathankot Airport,Pathankot,India",
    PAT: "Lok Nayak Jayaprakash Airport (Patna Airport),Patna,India",
    IXZ: "Vir Savarkar Airport (Port Blair Airport),Port Blair,India",
    PNY: "Pondicherry Airport,Puducherry,India",
    PNQ: "Pune International Airport,Pune,India",
    RPR: "Raipur Airport,Raipur,India",
    RAJ: "Rajkot Airport,Rajkot,India",
    RMD: "Ramagundam Airport,Ramagundam, Andhra Pradesh,India",
    IXR: "Birsa Munda Airport (Ranchi Airport),Ranchi,India",
    RTC: "Ratnagiri Airport,Ratnagiri,India",
    RRK: "Rourkela Airport,Rourkela,India",
    RUP: "Rupsi Airport,Rupsi, Meghalaya,India",
    SXV: "Salem Airport,Salem,India",
    TNI: "Satna Airport,Satna,India",
    SHL: "Barapani Airport,Shillong,India",
    SSE: "Solapur Airport,Sholapur (Solapur),India",
    IXS: "Silchar Airport (Kumbhirgram Airport),Silchar,India",
    SLV: "Shimla Airport,Simla, Himachal Pradesh,India",
    SXR: "Srinagar International Airport,Srinagar,India",
    STV: "Surat Airport,Surat, Gujarat,India",
    TEZ: "Tezpur Airport,Tezpur, Assam,India",
    TEI: "Tezu Airport,Tezu, Arunachal Pradesh,India",
    TRZ: "Tiruchirapalli international Airport,Tiruchirapalli (Trichy), Tamil Nadu,India",
    TIR: "Tirupati Airport,Tirupati, Andhra Pradesh,India",
    TRV: "Trivandrum International Airport,Trivandrum, Kerala,India",
    UDR: "Udaipur Airport,Udaipur,India",
    BDQ: "Vadodara Airport,Vadodara,India",
    VNS: "Varanasi Airport,Varanasi, Uttar Pradesh,India",
    VGA: "Vijayawada Airport,Vijayawada, Andhra Pradesh,India",
    VTZ: "Visakhapatnam Airport,Visakhapatnam, Andhra Pradesh,India",
    ZER: "Zero Airport (Ziro Airport),Ziro,India",
};

let City = [
    "Agartala",
    "Agatti Island",
    "Agra",
    "Ahmedabad",
    "Aizawl",
    "Akola",
    "Allahabad",
    "Along, Arunachal Pradesh",
    "Amritsar",
    "Assam",
    "Aurangabad, Maharashtra",
    "Bagdogra",
    "Bangalore",
    "Bareli",
    "Belgaum",
    "Bellary",
    "Bhatinda",
    "Bhavnagar",
    "Bhopal",
    "Bhubaneswar",
    "Bhuj, Kutch, Gujarat",
    "Bikaner",
    "Bilaspur, Chhattisgarh",
    "Car Nicobar",
    "Chandigarh",
    "Chennai (Madras)",
    "Coimbatore",
    "Cooch Behar",
    "Cuddapah",
    "Dabolim, Goa",
    "Daman",
    "Daporijo, Arunachal Pradesh",
    "Dehradun, Uttarakhand",
    "Delhi",
    "Dhanbad",
    "Dibrugarh",
    "Dimapur",
    "Diu",
    "Dum Dum",
    "Gandhidham / Kandla",
    "Gaya",
    "Gorakhpur",
    "Guna",
    "Guwahati",
    "Gwalior",
    "Hissar",
    "Hubli",
    "Hyderabad",
    "Begumpet",
    "Imphal",
    "Indore, Madhya Pradesh",
    "Jabalpur, Madhya Pradesh",
    "Jagdalpur",
    "Jaipur / Sanganer",
    "Jaisalmer",
    "Jammu",
    "Jamnagar, Gujurat",
    "Jamshedpur",
    "Jodhpur, Rajasthan",
    "Jorhat",
    "Kailashahar",
    "Kamalpur",
    "Kangra, Himachal Pradesh",
    "Kanpur, Uttar Pradesh",
    "Keshod",
    "Khajuraho",
    "Khowai",
    "Kolhapur",
    "Kota",
    "Kozhikode (Calicut)",
    "Kullu / Bhuntar, Himachal Pradesh",
    "Latur, Maharashtra",
    "Leh",
    "Lucknow",
    "Ludhiana",
    "Madurai",
    "Malda",
    "Mangalore",
    "Mohanbari",
    "Mumbai",
    "Muzaffarnagar",
    "Muzzafarpur",
    "Mysore",
    "Nagpur",
    "Nanded",
    "Nashik",
    "Nedumbassery, Kerala",
    "Neyveli",
    "Osmanabad",
    "Pasighat (Passighat)",
    "Pathankot",
    "Patna",
    "Port Blair",
    "Puducherry",
    "Pune",
    "Raipur",
    "Rajkot",
    "Ramagundam, Andhra Pradesh",
    "Ranchi",
    "Ratnagiri",
    "Rourkela",
    "Rupsi, Meghalaya",
    "Salem",
    "Satna",
    "Shillong",
    "Sholapur (Solapur)",
    "Silchar",
    "Simla, Himachal Pradesh",
    "Srinagar",
    "Surat, Gujarat",
    "Tezpur, Assam",
    "Tezu, Arunachal Pradesh",
    "Tiruchirapalli (Trichy), Tamil Nadu",
    "Tirupati, Andhra Pradesh",
    "Trivandrum, Kerala",
    "Udaipur",
    "Vadodara",
    "Varanasi, Uttar Pradesh",
    "Vijayawada, Andhra Pradesh",
    "Visakhapatnam, Andhra Pradesh",
    "Ziro",
];
let cities = {
    Agartala: "IXA",
    "Agatti Island": "AGX",
    Agra: "AGR",
    Ahmedabad: "AMD",
    Aizawl: "AJL",
    Akola: "AKD",
    Allahabad: "IXD",
    "Along, Arunachal Pradesh": "IXV",
    Amritsar: "ATQ",
    Assam: "IXI",
    "Aurangabad, Maharashtra": "IXU",
    Bagdogra: "IXB",
    Bangalore: "BLR",
    Bareli: "BEK",
    Belgaum: "IXG",
    Bellary: "BEP",
    Bhatinda: "BUP",
    Bhavnagar: "BHU",
    Bhopal: "BHO",
    Bhubaneswar: "BBI",
    "Bhuj, Kutch, Gujarat": "BHJ",
    Bikaner: "BKB",
    "Bilaspur, Chhattisgarh": "PAB",
    "Car Nicobar": "CBD",
    Chandigarh: "IXC",
    "Chennai (Madras)": "MAA",
    Coimbatore: "CJB",
    "Cooch Behar": "COH",
    Cuddapah: "CDP",
    "Dabolim, Goa": "GOI",
    Daman: "NMB",
    "Daporijo, Arunachal Pradesh": "DEP",
    "Dehradun, Uttarakhand": "DED",
    Delhi: "DEL",
    Dhanbad: "DBD",
    Dibrugarh: "DIB",
    Dimapur: "DMU",
    Diu: "DIU",
    "Dum Dum": "CCU",
    "Gandhidham / Kandla": "IXY",
    Gaya: "GAY",
    Gorakhpur: "GOP",
    Guna: "GUX",
    Guwahati: "GAU",
    Gwalior: "GWL",
    Hissar: "HSS",
    Hubli: "HBX",
    Begumpet: "BPM",
    Hyderabad: "HYD",
    Imphal: "IMF",
    "Indore, Madhya Pradesh": "IDR",
    "Jabalpur, Madhya Pradesh": "JLR",
    Jagdalpur: "JGB",
    "Jaipur / Sanganer": "JAI",
    Jaisalmer: "JSA",
    Jammu: "IXJ",
    "Jamnagar, Gujurat": "JGA",
    Jamshedpur: "IXW",
    "Jodhpur, Rajasthan": "JDH",
    Jorhat: "JRH",
    Kailashahar: "IXH",
    Kamalpur: "IXQ",
    "Kangra, Himachal Pradesh": "DHM",
    "Kanpur, Uttar Pradesh": "KNU",
    Keshod: "IXK",
    Khajuraho: "HJR",
    Khowai: "IXN",
    Kolhapur: "KLH",
    Kota: "KTU",
    "Kozhikode (Calicut)": "CCJ",
    "Kullu / Bhuntar, Himachal Pradesh": "KUU",
    "Latur, Maharashtra": "LTU",
    Leh: "IXL",
    Lucknow: "LKO",
    Ludhiana: "LUH",
    Madurai: "IXM",
    Malda: "LDA",
    Mangalore: "IXE",
    Mohanbari: "MOH",
    Mumbai: "BOM",
    Muzaffarnagar: "MZA",
    Muzzafarpur: "MZU",
    Mysore: "MYQ",
    Nagpur: "NAG",
    Nanded: "NDC",
    Nashik: "ISK",
    "Nedumbassery, Kerala": "COK",
    Neyveli: "NVY",
    Osmanabad: "OMN",
    "Pasighat (Passighat)": "IXT",
    Pathankot: "IXP",
    Patna: "PAT",
    "Port Blair": "IXZ",
    Puducherry: "PNY",
    Pune: "PNQ",
    Raipur: "RPR",
    Rajkot: "RAJ",
    "Ramagundam, Andhra Pradesh": "RMD",
    Ranchi: "IXR",
    Ratnagiri: "RTC",
    Rourkela: "RRK",
    "Rupsi, Meghalaya": "RUP",
    Salem: "SXV",
    Satna: "TNI",
    Shillong: "SHL",
    "Sholapur (Solapur)": "SSE",
    Silchar: "IXS",
    "Simla, Himachal Pradesh": "SLV",
    Srinagar: "SXR",
    "Surat, Gujarat": "STV",
    "Tezpur, Assam": "TEZ",
    "Tezu, Arunachal Pradesh": "TEI",
    "Tiruchirapalli (Trichy), Tamil Nadu": "TRZ",
    "Tirupati, Andhra Pradesh": "TIR",
    "Trivandrum, Kerala": "TRV",
    Udaipur: "UDR",
    Vadodara: "BDQ",
    "Varanasi, Uttar Pradesh": "VNS",
    "Vijayawada, Andhra Pradesh": "VGA",
    "Visakhapatnam, Andhra Pradesh": "VTZ",
    Ziro: "ZER",
};
