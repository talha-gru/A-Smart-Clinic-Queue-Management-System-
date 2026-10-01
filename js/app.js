/**
 * ParchiTrack - Healthcare Marketplace, Multi-Doctor Directory & Smart Queue Engine
 * Complete Production-Ready Client-Side Logic & State
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. INITIAL SEED DATA: CLINICS, DOCTORS, REVIEWS & QUEUES
  // ==========================================================================
  
  const PRESET_AVATARS = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
  ];

  const INITIAL_DOCTORS = [
    {
      id: 'doc-1',
      clinicId: 'clinic-1',
      name: 'Dr. Sarah Khan',
      title: 'MD (Internal Medicine), FACP',
      specialty: 'General Medicine & Diabetology',
      category: 'General Medicine',
      experience: '14 years',
      fee: '$25 / ₹500',
      rating: 4.9,
      reviewsCount: 128,
      img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80',
      clinicName: 'CarePoint Family Practice',
      locality: 'Green Park Market, Central Block',
      distanceKm: 1.8,
      travelMinutesCar: 6,
      travelMinutesTransit: 14,
      travelMinutesWalk: 20,
      chamber: 'Chamber 1',
      doctorStatus: 'Available',
      delayMinutes: 0,
      delayReason: '',
      bio: 'Dr. Sarah Khan is a senior internist specializing in family wellness, adult immunization, chronic lifestyle diseases, type-2 diabetes reversal, and geriatric care.',
      diseases: ['Fever / Viral Flu', 'Chronic Cough', 'Diabetes Mellitus', 'High Blood Pressure', 'Thyroid Disorders', 'Fatigue / Anemia', 'General Infection'],
      workingHours: '09:00 AM - 02:00 PM, 05:00 PM - 08:30 PM',
      reviews: [
        {
          author: 'Priya Narang',
          date: '3 days ago',
          rating: 5,
          verified: true,
          comment: 'Very thorough diagnosis. Dr. Sarah listened to all my symptoms without rushing and reviewed my previous lab records carefully.'
        },
        {
          author: 'Anand Mathur',
          date: '1 week ago',
          rating: 5,
          verified: true,
          comment: 'The live queue system saved me over 45 minutes! I arrived just 5 minutes before my token was called. Highly recommended.'
        },
        {
          author: 'Suman Roy',
          date: '2 weeks ago',
          rating: 4,
          verified: true,
          comment: 'Very good doctor. Polite staff and clean clinic.'
        }
      ]
    },
    {
      id: 'doc-2',
      clinicId: 'clinic-2',
      name: 'Dr. Rajesh Verma',
      title: 'MBBS, MD, DM (Cardiology), FACC',
      specialty: 'Cardiology & Preventive Heart Care',
      category: 'Cardiology',
      experience: '19 years',
      fee: '$40 / ₹900',
      rating: 4.95,
      reviewsCount: 214,
      img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80',
      clinicName: 'Apex Health Polyclinic & Diagnostics',
      locality: 'Metro Avenue, Civil Lines',
      distanceKm: 3.4,
      travelMinutesCar: 12,
      travelMinutesTransit: 22,
      travelMinutesWalk: 38,
      chamber: 'Chamber 204',
      doctorStatus: 'Delayed',
      delayMinutes: 20,
      delayReason: 'Extended emergency ECG assessment for previous cardiac patient',
      bio: 'Dr. Rajesh Verma is a distinguished cardiologist specializing in clinical cardiology, hypertension control, post-angioplasty rehab, lipid management, and non-invasive cardiac evaluation.',
      diseases: ['Chest Pain / Angina', 'Heart Palpitations', 'High Cholesterol', 'Shortness of Breath', 'Hypertension Crisis', 'Cardiac Arrhythmia', 'ECG Review'],
      workingHours: '10:00 AM - 03:00 PM, 06:00 PM - 09:00 PM',
      reviews: [
        {
          author: 'Harish Goel',
          date: 'Yesterday',
          rating: 5,
          verified: true,
          comment: 'Prompt emergency triage. The clinic prioritized my chest pain protocol immediately. Top tier doctor.'
        },
        {
          author: 'K. Balakrishnan',
          date: '4 days ago',
          rating: 5,
          verified: true,
          comment: 'Doctor Verma is a life saver. Patiently explained my angiography findings and simplified my medication plan.'
        }
      ]
    },
    {
      id: 'doc-3',
      clinicId: 'clinic-3',
      name: 'Dr. Ananya Sen',
      title: 'MD (Pediatrics), DCH',
      specialty: 'Pediatrics & Neonatal Care',
      category: 'Pediatrics',
      experience: '11 years',
      fee: '$25 / ₹600',
      rating: 4.88,
      reviewsCount: 96,
      img: 'https://images.unsplash.com/photo-1594824813627-2c97449cfa34?auto=format&fit=crop&w=300&q=80',
      clinicName: 'Sunrise Pediatrics & Child Wellness',
      locality: 'Sunrise Residency Arcade, Sector 9',
      distanceKm: 2.1,
      travelMinutesCar: 7,
      travelMinutesTransit: 16,
      travelMinutesWalk: 24,
      chamber: 'Room 3',
      doctorStatus: 'Available',
      delayMinutes: 0,
      delayReason: '',
      bio: 'Dr. Ananya Sen is a compassionate child specialist dedicated to infant immunization, growth milestones, childhood allergies, viral cough, and pediatric nutrition guidance.',
      diseases: ['Child Fever & Flu', 'Vaccination Schedule', 'Infant Colic', 'Pediatric Asthma', 'Ear Ache in Kids', 'Loss of Appetite', 'Skin Rash / Measles'],
      workingHours: '09:30 AM - 01:30 PM, 04:30 PM - 08:00 PM',
      reviews: [
        {
          author: 'Neha Aggarwal',
          date: '5 days ago',
          rating: 5,
          verified: true,
          comment: 'Wonderful with kids! My 3-year-old usually cries at clinics, but Dr. Ananya made him feel relaxed with cartoon stickers.'
        },
        {
          author: 'Amitabh Roy',
          date: '2 weeks ago',
          rating: 5,
          verified: true,
          comment: 'Best pediatrician in Sector 9. Clear vaccination calendar and quick pre-check process.'
        }
      ]
    },
    {
      id: 'doc-4',
      clinicId: 'clinic-4',
      name: 'Dr. Vikram Malhotra',
      title: 'MS (Orthopedics), M.Ch (Ortho)',
      specialty: 'Orthopedics & Spine Surgery',
      category: 'Orthopedics',
      experience: '16 years',
      fee: '$35 / ₹800',
      rating: 4.86,
      reviewsCount: 142,
      img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80',
      clinicName: 'Metro Orthopedic & Spine Center',
      locality: 'Ring Road Towers, Block B',
      distanceKm: 4.5,
      travelMinutesCar: 15,
      travelMinutesTransit: 28,
      travelMinutesWalk: 50,
      chamber: 'Chamber 101',
      doctorStatus: 'Available',
      delayMinutes: 0,
      delayReason: '',
      bio: 'Dr. Vikram Malhotra is an expert orthopedic surgeon specializing in knee osteoarthritis, lumbar slip disc, ligament sports injuries, fracture management, and joint preservation.',
      diseases: ['Knee Pain / Arthritis', 'Lower Back Pain', 'Sciatica / Slip Disc', 'Shoulder Frozen Joint', 'Sports Ligament Tear', 'Bone Fractures', 'Cervical Spondylosis'],
      workingHours: '10:00 AM - 02:00 PM, 05:00 PM - 08:30 PM',
      reviews: [
        {
          author: 'Devendra Joshi',
          date: '1 week ago',
          rating: 5,
          verified: true,
          comment: 'My severe chronic knee pain got substantially better within 2 weeks of his physical therapy protocol. Minimal painkillers recommended.'
        }
      ]
    },
    {
      id: 'doc-5',
      clinicId: 'clinic-5',
      name: 'Dr. Priya Nambiar',
      title: 'MD, DNB (Dermatology & Venereology)',
      specialty: 'Dermatology & Hair Restoration',
      category: 'Dermatology',
      experience: '12 years',
      fee: '$30 / ₹700',
      rating: 4.92,
      reviewsCount: 180,
      img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=300&q=80',
      clinicName: 'DermaClear Skin & Hair Institute',
      locality: 'Orchid Mall Plaza, 2nd Floor',
      distanceKm: 2.8,
      travelMinutesCar: 9,
      travelMinutesTransit: 18,
      travelMinutesWalk: 30,
      chamber: 'Suite A',
      doctorStatus: 'Available',
      delayMinutes: 0,
      delayReason: '',
      bio: 'Dr. Priya Nambiar specializes in clinical and aesthetic dermatology, severe cystic acne treatment, chronic psoriasis, scalp hair loss therapies, and eczema management.',
      diseases: ['Cystic Acne & Scars', 'Severe Hair Fall / Alopecia', 'Eczema & Itching', 'Psoriasis Patches', 'Fungal Infection', 'Pigmentation & Melasma', 'Skin Allergies'],
      workingHours: '11:00 AM - 03:00 PM, 04:30 PM - 07:30 PM',
      reviews: [
        {
          author: 'Ritika Sen',
          date: '3 days ago',
          rating: 5,
          verified: true,
          comment: 'My persistent acne finally cleared up after following Dr. Priya\'s treatment for 6 weeks. No unnecessary expensive cosmetics pushed.'
        }
      ]
    },
    {
      id: 'doc-6',
      clinicId: 'clinic-6',
      name: 'Dr. Amit Deshmukh',
      title: 'MS (ENT), DLO',
      specialty: 'ENT & Sinus Surgery',
      category: 'ENT',
      experience: '15 years',
      fee: '$30 / ₹650',
      rating: 4.81,
      reviewsCount: 84,
      img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80',
      clinicName: 'CareWell ENT & Sinus Clinic',
      locality: 'Heritage Complex, Market Lane',
      distanceKm: 5.2,
      travelMinutesCar: 18,
      travelMinutesTransit: 32,
      travelMinutesWalk: 60,
      chamber: 'Chamber 2',
      doctorStatus: 'Available',
      delayMinutes: 0,
      delayReason: '',
      bio: 'Dr. Amit Deshmukh is a senior ENT surgeon specializing in endoscopic sinus surgery, chronic allergic rhinitis, hearing loss assessment, vertigo rehabilitation, and tonsil care.',
      diseases: ['Sinusitis & Nasal Blockage', 'Ear Pain / Discharge', 'Hearing Loss / Tinnitus', 'Vertigo / Dizziness', 'Sore Throat / Tonsillitis', 'Snoring & Sleep Apnea'],
      workingHours: '09:00 AM - 01:00 PM, 05:00 PM - 08:30 PM',
      reviews: [
        {
          author: 'Gaurav Trivedi',
          date: '1 week ago',
          rating: 5,
          verified: true,
          comment: 'Detailed endoscopy performed in chamber with live screen demonstration. Immediate relief from my sinus pressure.'
        }
      ]
    }
  ];

  const SPECIALTY_CATEGORIES = [
    { id: 'all', label: 'All Specialties', icon: 'stethoscope' },
    { id: 'General Medicine', label: '🩺 General Medicine', icon: 'activity' },
    { id: 'Cardiology', label: '🫀 Cardiology / Heart', icon: 'heart-pulse' },
    { id: 'Pediatrics', label: '👶 Child & Pediatrics', icon: 'baby' },
    { id: 'Orthopedics', label: '🦴 Bone & Orthopedics', icon: 'bone' },
    { id: 'Dermatology', label: '🧴 Skin & Dermatology', icon: 'sparkles' },
    { id: 'ENT', label: '👂 ENT & Sinus', icon: 'mic-off' }
  ];

  // Common clinical symptom chips for pre-check
  const COMMON_SYMPTOMS = [
    { id: 'fever', label: 'Fever / Chills', icon: 'thermometer' },
    { id: 'cough', label: 'Cough / Cold', icon: 'wind' },
    { id: 'throat', label: 'Sore Throat', icon: 'mic-off' },
    { id: 'chest', label: 'Chest Discomfort', icon: 'heart-pulse' },
    { id: 'breathing', label: 'Shortness of Breath', icon: 'activity' },
    { id: 'headache', label: 'Severe Headache', icon: 'brain' },
    { id: 'joint', label: 'Joint / Knee Pain', icon: 'bone' },
    { id: 'acne', label: 'Acne / Skin Rash', icon: 'sparkles' },
    { id: 'stomach', label: 'Abdominal Pain', icon: 'shield-alert' },
    { id: 'dizziness', label: 'Dizziness / Vertigo', icon: 'zap-off' },
    { id: 'diabetes', label: 'Blood Sugar Check', icon: 'droplet' },
    { id: 'bp', label: 'Blood Pressure Check', icon: 'gauge' }
  ];

  // Initial Seed Queue Tokens
  const INITIAL_QUEUES = {
    'doc-1': {
      currentlyServing: 18,
      avgConsultationMinutes: 5,
      tokens: [
        {
          token: 18,
          patientName: 'Kavita Sharma',
          patientCode: 'P-1018',
          age: 42,
          phone: '+91 98765-43210',
          category: 'General',
          status: 'Serving',
          avatar: PRESET_AVATARS[0],
          timeInChamber: '09:42 AM',
          preCheck: {
            completed: true,
            symptoms: ['Fever / Viral Flu', 'Sore Throat'],
            vitals: { bp: '118/78', sugar: '104', temp: '100.2', pulse: '78', spo2: '99' },
            reports: [{ name: 'CBC_Blood_Test.pdf', size: '1.2 MB' }],
            notes: 'Fever onset 2 days ago after travel.'
          }
        },
        {
          token: 19,
          patientName: 'Devraj Anand',
          patientCode: 'P-1019',
          age: 71,
          phone: '+91 98112-33445',
          category: 'Senior Citizen',
          status: 'Waiting',
          avatar: PRESET_AVATARS[1],
          preCheck: {
            completed: true,
            symptoms: ['High Blood Pressure', 'Joint / Knee Pain'],
            vitals: { bp: '138/86', sugar: '130', temp: '98.4', pulse: '70', spo2: '97' },
            reports: [{ name: 'Last_Prescription_May.jpg', size: '2.4 MB' }],
            notes: 'Routine hypertension follow-up.'
          }
        },
        {
          token: 20,
          patientName: 'Arjun Mathur',
          patientCode: 'P-1020',
          age: 29,
          phone: '+91 97110-88990',
          category: 'General',
          status: 'Waiting',
          avatar: PRESET_AVATARS[3],
          preCheck: null
        },
        {
          token: 21,
          patientName: 'Sita Devi',
          patientCode: 'P-1021',
          age: 68,
          phone: '+91 99881-22334',
          category: 'Senior Citizen',
          status: 'Waiting',
          avatar: PRESET_AVATARS[4],
          preCheck: null
        }
      ],
      completedTokens: [15, 16, 17]
    },
    'doc-2': {
      currentlyServing: 24,
      avgConsultationMinutes: 6,
      tokens: [
        {
          token: 24,
          patientName: 'Harish Goel',
          patientCode: 'P-2024',
          age: 58,
          phone: '+91 98220-44556',
          category: 'General',
          status: 'Serving',
          avatar: PRESET_AVATARS[1],
          timeInChamber: '09:35 AM',
          preCheck: {
            completed: true,
            symptoms: ['Chest Pain / Angina', 'Shortness of Breath'],
            vitals: { bp: '145/94', sugar: '140', temp: '98.5', pulse: '88', spo2: '96' },
            reports: [{ name: 'ECG_Today.pdf', size: '3.1 MB' }],
            notes: 'Chest tightness experienced during morning walk.'
          }
        },
        {
          token: 25,
          patientName: 'Vidya Dhar',
          patientCode: 'P-2025',
          age: 76,
          phone: '+91 98331-77889',
          category: 'Senior Citizen',
          status: 'Waiting',
          avatar: PRESET_AVATARS[0],
          preCheck: null
        }
      ],
      completedTokens: [22, 23]
    }
  };

  // ==========================================================================
  // 2. STATE REPOSITORY
  // ==========================================================================
  let doctors = [];
  let queues = {};
  let currentDoctorId = 'doc-1';
  let activeTab = 'find-doctors';
  let isElderlyMode = false;
  let isAudioEnabled = true;
  let currentFilter = 'all';
  let selectedSpecialtyFilter = 'all';
  let searchQuery = '';
  let selectedLocationFilter = 'all';
  let currentSortBy = 'recommended';
  
  // Auth & Accounts State
  let accounts = [];

  const INITIAL_ACCOUNTS = [
    {
      id: 'acc-1',
      role: 'patient',
      name: 'Rahul Sharma',
      identifier: 'rahul@example.com',
      avatar: PRESET_AVATARS[3],
      doctorId: null
    },
    {
      id: 'acc-doc-1',
      role: 'doctor',
      name: 'Dr. Sarah Khan',
      identifier: 'dr.sarah@carepoint.com',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80',
      doctorId: 'doc-1'
    },
    {
      id: 'acc-doc-2',
      role: 'doctor',
      name: 'Dr. Rajesh Verma',
      identifier: 'dr.verma@apexhealth.com',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80',
      doctorId: 'doc-2'
    }
  ];

  let currentUser = {
    isLoggedIn: true,
    role: 'patient', // 'patient' or 'doctor'
    name: 'Rahul Sharma',
    identifier: 'rahul@example.com',
    avatar: PRESET_AVATARS[3],
    doctorId: null
  };

  let authModalRole = 'patient';
  let authIsSignUp = false;
  let tempAuthAvatar = PRESET_AVATARS[3];

  let tempUploadedFiles = [];
  let selectedSymptoms = new Set();
  let pendingReviewRating = 5;

  // Category mapping helper for new doctor registration
  function mapSpecialtyToCategory(specialty) {
    const s = (specialty || '').toLowerCase();
    if (s.includes('cardio') || s.includes('heart')) return 'Cardiology';
    if (s.includes('pediat') || s.includes('child') || s.includes('infant') || s.includes('baby')) return 'Pediatrics';
    if (s.includes('ortho') || s.includes('bone') || s.includes('spine') || s.includes('joint')) return 'Orthopedics';
    if (s.includes('derm') || s.includes('skin') || s.includes('hair') || s.includes('cosmet')) return 'Dermatology';
    if (s.includes('ent') || s.includes('ear') || s.includes('nose') || s.includes('throat') || s.includes('sinus')) return 'ENT';
    return 'General Medicine';
  }

  // Doctor Registration & Persistence Factory
  function registerDoctorProfile({ name, specialty, regNumber, clinicName, address, avatar, fee }) {
    let docName = (name || 'Doctor').trim();
    if (!docName.toLowerCase().startsWith('dr.') && !docName.toLowerCase().startsWith('dr ')) {
      docName = 'Dr. ' + docName;
    }

    const cleanSpecialty = (specialty || 'General Medicine').trim();
    const category = mapSpecialtyToCategory(cleanSpecialty);
    const newDoctorId = 'doc-' + Date.now();
    const cleanClinic = (clinicName || `${docName}'s Family Clinic`).trim();
    const cleanLocality = (address || 'Central Healthcare Square, Suite 202').trim();
    const docImg = avatar || PRESET_AVATARS[doctors.length % PRESET_AVATARS.length];

    const newDoc = {
      id: newDoctorId,
      clinicId: 'clinic-' + Date.now(),
      name: docName,
      title: regNumber ? `Reg: ${regNumber}` : 'MBBS, MD',
      specialty: cleanSpecialty,
      category: category,
      experience: '9+ years',
      fee: fee || '$30 / ₹650',
      rating: 5.0,
      reviewsCount: 1,
      img: docImg,
      clinicName: cleanClinic,
      locality: cleanLocality,
      distanceKm: parseFloat((1.5 + Math.random() * 3).toFixed(1)),
      travelMinutesCar: Math.floor(6 + Math.random() * 8),
      travelMinutesTransit: Math.floor(14 + Math.random() * 12),
      travelMinutesWalk: Math.floor(20 + Math.random() * 20),
      chamber: 'Chamber 1',
      doctorStatus: 'Available',
      delayMinutes: 0,
      delayReason: '',
      bio: `${docName} is a verified healthcare specialist in ${cleanSpecialty}. Actively accepting digital token appointments, walk-in visits, and online pre-check reports on ParchiTrack.`,
      diseases: [cleanSpecialty, 'General Consultation', 'Health Checkup', 'Clinical Diagnosis', 'Follow-up Consultation'],
      workingHours: '09:00 AM - 01:30 PM, 05:00 PM - 08:30 PM',
      reviews: [
        {
          author: 'ParchiTrack Medical Board',
          date: 'Just now',
          rating: 5,
          verified: true,
          comment: 'Credentials and clinic chamber verified for live queue bookings.'
        }
      ]
    };

    // Add doctor to beginning of list so they appear prominently
    doctors.unshift(newDoc);

    // Initialize doctor's active queue
    queues[newDoctorId] = {
      currentlyServing: 1,
      avgConsultationMinutes: 5,
      tokens: [
        {
          token: 1,
          patientName: 'Introductory Consultation',
          patientCode: `P-${newDoctorId.slice(-4)}01`,
          age: 36,
          phone: '+91 98000-00000',
          category: 'General',
          status: 'Serving',
          avatar: PRESET_AVATARS[0],
          timeInChamber: '09:30 AM',
          preCheck: null
        }
      ],
      completedTokens: []
    };

    saveStorage();
    return newDoc;
  }

  // Initialize from storage or seed with multi-account support
  function initStorage() {
    try {
      const savedDocs = localStorage.getItem('parchitrack_doctors_v2');
      const savedQueues = localStorage.getItem('parchitrack_queues_v2');
      const savedAccounts = localStorage.getItem('parchitrack_accounts_v2');
      const savedUser = localStorage.getItem('parchitrack_user_v2');

      doctors = savedDocs ? JSON.parse(savedDocs) : INITIAL_DOCTORS;
      queues = savedQueues ? JSON.parse(savedQueues) : INITIAL_QUEUES;
      accounts = savedAccounts ? JSON.parse(savedAccounts) : INITIAL_ACCOUNTS;

      // Always guarantee the seed doctors are present in the array (merge, don't replace)
      if (!Array.isArray(doctors) || doctors.length === 0) {
        doctors = [...INITIAL_DOCTORS];
      } else {
        // Merge any INITIAL_DOCTORS that may be missing (e.g. first run after schema change)
        INITIAL_DOCTORS.forEach(seedDoc => {
          if (!doctors.find(d => d.id === seedDoc.id)) {
            doctors.push(seedDoc);
          }
        });
      }

      // Restore currentDoctorId from saved user session so dashboard shows correct doctor
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        currentUser = parsedUser;
        // Prefer explicit doctorId (doctor accounts), fall back to _lastDoctorId (any user)
        const restoredDoctorId = parsedUser.doctorId || parsedUser._lastDoctorId;
        if (restoredDoctorId && doctors.find(d => d.id === restoredDoctorId)) {
          currentDoctorId = restoredDoctorId;
        }
      }

      // Ensure every doctor has an initialized queue
      doctors.forEach(doc => {
        if (!queues[doc.id]) {
          queues[doc.id] = {
            currentlyServing: 1,
            avgConsultationMinutes: 5,
            tokens: [
              {
                token: 1,
                patientName: 'Walk-in Patient',
                patientCode: `P-${doc.id.replace('doc-', '')}001`,
                age: 35,
                phone: '+91 98000-11223',
                category: 'General',
                status: 'Serving',
                avatar: PRESET_AVATARS[0],
                timeInChamber: '10:00 AM',
                preCheck: null
              }
            ],
            completedTokens: []
          };
        }
      });

    } catch (e) {
      console.warn('LocalStorage error fallback to defaults', e);
      doctors = [...INITIAL_DOCTORS];
      queues = INITIAL_QUEUES;
      accounts = [...INITIAL_ACCOUNTS];
    }
  }

  function saveStorage() {
    try {
      localStorage.setItem('parchitrack_doctors_v2', JSON.stringify(doctors));
      localStorage.setItem('parchitrack_queues_v2', JSON.stringify(queues));
      localStorage.setItem('parchitrack_accounts_v2', JSON.stringify(accounts));
      // Always persist currentDoctorId alongside user so it is restored on next load
      const userToSave = Object.assign({}, currentUser, { _lastDoctorId: currentDoctorId });
      localStorage.setItem('parchitrack_user_v2', JSON.stringify(userToSave));
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  }

  function getCurrentDoctor() {
    return doctors.find(d => d.id === currentDoctorId) || doctors[0];
  }

  function getCurrentQueue() {
    return queues[currentDoctorId] || queues['doc-1'];
  }

  // ==========================================================================
  // 3. AUDIO CHIME SYNTHESIZER (Web Audio API)
  // ==========================================================================
  function playHospitalChime() {
    if (!isAudioEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;

      // Note 1: F5 (698.46 Hz)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(698.46, now);
      gain1.gain.setValueAtTime(0, now);
      gain1.gain.linearRampToValueAtTime(0.3, now + 0.05);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.7);

      // Note 2: A5 (880.00 Hz)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(880.00, now + 0.35);
      gain2.gain.setValueAtTime(0, now + 0.35);
      gain2.gain.linearRampToValueAtTime(0.35, now + 0.4);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.35);
      osc2.stop(now + 1.2);
    } catch (e) {
      console.log('Audio chime note:', e);
    }
  }

  // ==========================================================================
  // 4. PRIORITY SCHEDULING & ESTIMATED WAIT TIME CALCULATOR
  // ==========================================================================
  function sortWaitingTokens(tokens) {
    const serving = tokens.filter(t => t.status === 'Serving');
    const waiting = tokens.filter(t => t.status === 'Waiting');

    const emergencies = waiting.filter(t => t.category === 'Emergency');
    const seniors = waiting.filter(t => t.category === 'Senior Citizen');
    const generals = waiting.filter(t => t.category === 'General');

    const sortedWaiting = [];

    // All emergencies jump to front
    emergencies.forEach(e => sortedWaiting.push(e));

    // Fair interleaving for seniors
    let s = 0, g = 0;
    while (s < seniors.length || g < generals.length) {
      if (s < seniors.length) sortedWaiting.push(seniors[s++]);
      if (g < generals.length) sortedWaiting.push(generals[g++]);
    }

    return [...serving, ...sortedWaiting];
  }

  function calculateWaitMinutes(positionIndex, avgConsultMinutes, currentDoctorDelay) {
    if (positionIndex <= 0) return 0;
    return (positionIndex * avgConsultMinutes) + (currentDoctorDelay || 0);
  }

  function getTrafficStatus(waitingCount) {
    if (waitingCount <= 4) {
      return { level: 'Normal', color: 'text-emerald-600', dot: 'bg-emerald-500', range: '~5 - 15 min wait' };
    } else if (waitingCount <= 8) {
      return { level: 'Moderate', color: 'text-amber-600', dot: 'bg-amber-500', range: '~15 - 35 min wait' };
    } else {
      return { level: 'Heavy', color: 'text-rose-600', dot: 'bg-rose-500', range: '~35 - 60+ min wait' };
    }
  }

  // ==========================================================================
  // 5. RENDERING CORE
  // ==========================================================================
  function renderApp() {
    renderUserAccountUI();
    renderClinicSelector();
    renderDelayBanner();
    renderSpecialtyPills();
    renderDoctorDirectory();
    renderLiveQueueDashboard();
    renderDoctorChambers();
    renderClinicStaffDesk();
    renderPreCheckOptions();
    renderClinicRouteAssistant();
    renderNetworkClinics();
    renderTvDisplay();

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // User Auth Strip in Header
  function renderUserAccountUI() {
    const container = document.getElementById('userAccountSection');
    const fastDocBtn = document.getElementById('doctorDashboardFastBtn');
    if (!container) return;

    if (!currentUser.isLoggedIn) {
      container.innerHTML = `
        <button onclick="window.ParchiTrack.openAuthModal('patient')" class="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5">
          <i data-lucide="user" class="w-4 h-4"></i>
          <span>Sign In / Register</span>
        </button>
      `;
      if (fastDocBtn) fastDocBtn.classList.add('hidden');
      return;
    }

    const isDoc = currentUser.role === 'doctor';
    if (fastDocBtn) {
      fastDocBtn.classList.toggle('hidden', !isDoc);
    }

    container.innerHTML = `
      <div class="flex items-center gap-2.5 bg-slate-100 hover:bg-slate-200/80 p-1.5 pr-3 rounded-2xl border border-slate-200 cursor-pointer transition-colors relative group" id="userMenuWrapper">
        <img src="${currentUser.avatar || PRESET_AVATARS[0]}" alt="${currentUser.name}" class="w-8 h-8 rounded-xl object-cover border border-white shadow-2xs">
        <div class="text-left hidden sm:block">
          <span class="text-xs font-bold text-slate-800 block leading-tight truncate max-w-[120px]">${currentUser.name}</span>
          <span class="text-[10px] font-extrabold uppercase ${isDoc ? 'text-brand-600' : 'text-emerald-700'} tracking-wider">
            ${isDoc ? '👨‍⚕️ Doctor' : '👤 Patient'}
          </span>
        </div>
        <button onclick="window.ParchiTrack.logoutUser()" title="Logout" class="ml-1 text-slate-400 hover:text-rose-600 transition-colors p-1">
          <i data-lucide="log-out" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    `;
  }

  // Clinic Selector in Top Bar
  function renderClinicSelector() {
    const select = document.getElementById('clinicSelector');
    const locSelect = document.getElementById('searchLocationSelect');
    if (!select) return;

    select.innerHTML = doctors.map(d => `
      <option value="${d.id}" ${d.id === currentDoctorId ? 'selected' : ''}>
        ${d.clinicName} (${d.name})
      </option>
    `).join('');

    if (locSelect) {
      const uniqueLocs = Array.from(new Set(doctors.map(d => d.locality)));
      locSelect.innerHTML = `
        <option value="all">All Localities & Clinics</option>
        ${uniqueLocs.map(l => `<option value="${l}" ${selectedLocationFilter === l ? 'selected' : ''}>${l}</option>`).join('')}
      `;
    }

    // Also populate doctor select in Token Booking modal form
    const bookDocSelect = document.getElementById('bookDoctorSelect');
    if (bookDocSelect) {
      bookDocSelect.innerHTML = doctors.map(d => `
        <option value="${d.id}" ${d.id === currentDoctorId ? 'selected' : ''}>
          ${d.name} - ${d.specialty} (${d.clinicName})
        </option>
      `).join('');
    }
  }

  // Doctor Delay Notification Banner
  function renderDelayBanner() {
    const container = document.getElementById('delayBannerContainer');
    const navBadge = document.getElementById('navDelayBadge');
    if (!container) return;

    const doc = getCurrentDoctor();
    if (doc.doctorStatus === 'Delayed' && doc.delayMinutes > 0) {
      container.classList.remove('hidden');
      if (navBadge) navBadge.classList.remove('hidden');

      container.innerHTML = `
        <div class="bg-amber-500 text-slate-900 border-b border-amber-600 py-2.5 px-4 shadow-xs">
          <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div class="flex items-center gap-2.5 font-bold">
              <span class="p-1 bg-amber-900 text-amber-200 rounded-lg shrink-0">
                <i data-lucide="alert-triangle" class="w-4 h-4"></i>
              </span>
              <span>LIVE DOCTOR DELAY ALERT:</span>
              <span class="font-normal text-slate-900 font-medium">
                ${doc.name} (${doc.clinicName}) is running approximately <strong>${doc.delayMinutes} minutes behind schedule</strong>.
                ${doc.delayReason ? `(${doc.delayReason})` : ''}
              </span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-xs bg-black/10 px-2.5 py-1 rounded-md font-semibold">
                All upcoming token wait estimates adjusted automatically
              </span>
              <button onclick="window.ParchiTrack.dismissDelayAlert()" class="p-1 hover:bg-black/10 rounded-md transition-colors" title="Dismiss Alert">
                <i data-lucide="x" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    } else {
      container.classList.add('hidden');
      if (navBadge) navBadge.classList.add('hidden');
    }
  }

  // Specialty Category Filter Pills
  function renderSpecialtyPills() {
    const container = document.getElementById('specialtyCategoryPills');
    if (!container) return;

    container.innerHTML = SPECIALTY_CATEGORIES.map(cat => `
      <div 
        class="category-pill ${selectedSpecialtyFilter === cat.id ? 'active' : ''}" 
        onclick="window.ParchiTrack.filterBySpecialty('${cat.id}')"
      >
        <span>${cat.label}</span>
      </div>
    `).join('');
  }

  // DOCTOR DIRECTORY MARKETPLACE GRID
  function renderDoctorDirectory() {
    const container = document.getElementById('doctorsGridContainer');
    const subtitle = document.getElementById('doctorCountSubtitle');
    if (!container) return;

    // Filter logic
    let filtered = doctors.filter(doc => {
      // 1. Specialty filter
      if (selectedSpecialtyFilter !== 'all' && doc.category !== selectedSpecialtyFilter) {
        return false;
      }
      // 2. Locality filter
      if (selectedLocationFilter !== 'all' && doc.locality !== selectedLocationFilter) {
        return false;
      }
      // 3. Search query: matches doctor name, specialty, clinic name, or diseases!
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const nameMatch = doc.name.toLowerCase().includes(q);
        const specMatch = doc.specialty.toLowerCase().includes(q);
        const clinicMatch = doc.clinicName.toLowerCase().includes(q);
        const diseaseMatch = doc.diseases.some(d => d.toLowerCase().includes(q));
        if (!nameMatch && !specMatch && !clinicMatch && !diseaseMatch) {
          return false;
        }
      }
      return true;
    });

    // Sort logic
    if (currentSortBy === 'distance') {
      filtered.sort((a, b) => a.distanceKm - b.distanceKm);
    } else if (currentSortBy === 'wait') {
      filtered.sort((a, b) => {
        const qA = (queues[a.id]?.tokens || []).filter(t => t.status === 'Waiting').length;
        const qB = (queues[b.id]?.tokens || []).filter(t => t.status === 'Waiting').length;
        return qA - qB;
      });
    } else {
      // Recommended: highest rating first
      filtered.sort((a, b) => b.rating - a.rating);
    }

    if (subtitle) {
      subtitle.textContent = `Showing ${filtered.length} verified doctors matching your health criteria`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
          <div class="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 mx-auto">
            <i data-lucide="search-x" class="w-8 h-8"></i>
          </div>
          <h4 class="font-display font-bold text-slate-900 text-lg">No Doctors Found</h4>
          <p class="text-xs text-slate-500 max-w-md mx-auto">
            We couldn't find any specialist matching "<strong>${searchQuery}</strong>". Try clearing your search or selecting "All Specialties".
          </p>
          <button onclick="window.ParchiTrack.clearSearchFilters()" class="px-4 py-2 bg-brand-600 text-white rounded-xl text-xs font-bold mt-2">
            Reset Filters
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(doc => {
      const q = queues[doc.id] || { currentlyServing: '--', tokens: [] };
      const waitingCount = q.tokens.filter(t => t.status === 'Waiting').length;
      const isServing = q.currentlyServing;
      const estWait = calculateWaitMinutes(waitingCount + 1, q.avgConsultationMinutes || 5, doc.delayMinutes);

      return `
        <div class="doctor-card bg-white rounded-3xl p-6 border border-slate-200/90 shadow-card flex flex-col justify-between">
          <div class="space-y-4">
            
            <!-- Top Status & Distance -->
            <div class="flex items-center justify-between text-xs">
              <span class="inline-flex items-center gap-1 font-bold ${doc.doctorStatus === 'Available' ? 'text-emerald-700 bg-emerald-50 border border-emerald-200' : 'text-amber-700 bg-amber-50 border border-amber-200'} px-2.5 py-0.5 rounded-full text-[10px]">
                <span class="w-2 h-2 rounded-full ${doc.doctorStatus === 'Available' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}"></span>
                <span>${doc.doctorStatus === 'Available' ? 'Available' : doc.delayMinutes + 'm Delayed'}</span>
              </span>

              <span class="text-slate-500 font-semibold flex items-center gap-1 text-[11px]">
                <i data-lucide="navigation" class="w-3.5 h-3.5 text-brand-600"></i>
                <span>${doc.distanceKm} km away</span>
              </span>
            </div>

            <!-- Doctor Profile Details -->
            <div class="flex items-start gap-4">
              <img src="${doc.img}" alt="${doc.name}" class="w-16 h-16 rounded-2xl object-cover shrink-0 border border-slate-100 shadow-sm">
              <div class="space-y-0.5">
                <div class="flex items-center gap-1.5">
                  <h4 class="font-display font-bold text-slate-900 text-base hover:text-brand-600 cursor-pointer" onclick="window.ParchiTrack.openDoctorPortfolio('${doc.id}')">${doc.name}</h4>
                  <i data-lucide="check-circle" class="w-4 h-4 text-brand-600 shrink-0"></i>
                </div>
                <p class="text-xs font-semibold text-brand-700">${doc.specialty}</p>
                <p class="text-[11px] text-slate-400 font-medium">${doc.title}</p>
                
                <div class="flex items-center gap-2 pt-1 text-xs">
                  <span class="text-amber-500 font-bold flex items-center gap-0.5">
                    ★ ${doc.rating}
                  </span>
                  <span class="text-slate-400">(${doc.reviewsCount})</span>
                  <span class="text-slate-300">•</span>
                  <span class="text-slate-600 font-medium">${doc.experience}</span>
                </div>
              </div>
            </div>

            <!-- Clinic & Chamber Box -->
            <div class="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-xs space-y-1">
              <div class="flex items-center justify-between font-bold text-slate-800">
                <span class="truncate">${doc.clinicName}</span>
                <span class="text-emerald-700 text-[11px] shrink-0 font-extrabold">${doc.fee}</span>
              </div>
              <p class="text-[11px] text-slate-500 truncate">${doc.locality}</p>
            </div>

            <!-- Live Queue Velocity Ticker -->
            <div class="flex items-center justify-between p-2.5 bg-blue-50/50 rounded-xl border border-blue-100 text-xs">
              <div class="flex items-center gap-2">
                <span class="text-[10px] uppercase font-bold text-slate-400">Now Serving:</span>
                <span class="font-display font-extrabold text-brand-700 text-sm">#${isServing}</span>
              </div>
              <div class="text-right">
                <span class="text-[11px] text-slate-600 font-bold">${waitingCount} waiting (~${estWait}m wait)</span>
              </div>
            </div>

            <!-- Conditions Treated Pills (Truncated to top 3) -->
            <div class="flex flex-wrap gap-1">
              ${doc.diseases.slice(0, 3).map(d => `
                <span class="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[10px] font-semibold">${d}</span>
              `).join('')}
              ${doc.diseases.length > 3 ? `<span class="px-1.5 py-0.5 text-[10px] text-slate-400 font-medium">+${doc.diseases.length - 3} more</span>` : ''}
            </div>

          </div>

          <!-- Bottom Action Buttons -->
          <div class="pt-5 border-t border-slate-100 mt-4 flex items-center gap-2">
            <button onclick="window.ParchiTrack.openDoctorPortfolio('${doc.id}')" class="flex-1 py-2 px-3 border border-slate-200 hover:border-brand-500 hover:bg-slate-50 rounded-xl text-xs font-bold text-slate-700 transition-colors">
              View Profile & Reviews
            </button>
            <button onclick="window.ParchiTrack.bookTokenWithDoctor('${doc.id}')" class="py-2 px-3.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1 shrink-0">
              <i data-lucide="ticket" class="w-3.5 h-3.5"></i>
              <span>Book Token</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // TAB 2: Live Queue Dashboard
  function renderLiveQueueDashboard() {
    const doc = getCurrentDoctor();
    const q = getCurrentQueue();
    q.tokens = sortWaitingTokens(q.tokens);

    const servingToken = q.tokens.find(t => t.status === 'Serving');
    const waitingTokens = q.tokens.filter(t => t.status === 'Waiting');
    const traffic = getTrafficStatus(waitingTokens.length);

    // Update Nav Live Serving Badge
    const navLiveBadge = document.getElementById('navLiveServingBadge');
    if (navLiveBadge) {
      if (servingToken) {
        navLiveBadge.classList.remove('hidden');
        navLiveBadge.textContent = `#${servingToken.token}`;
      } else {
        navLiveBadge.classList.add('hidden');
      }
    }

    // Top Overview Counters
    const statWaitingCount = document.getElementById('statWaitingCount');
    if (statWaitingCount) statWaitingCount.textContent = waitingTokens.length;

    const statAvgTime = document.getElementById('statAvgTime');
    if (statAvgTime) statAvgTime.textContent = `${q.avgConsultationMinutes || 5} min`;

    const statTrafficLevel = document.getElementById('statTrafficLevel');
    const trafficDot = document.getElementById('trafficDot');
    const statWaitRange = document.getElementById('statWaitRange');
    if (statTrafficLevel && trafficDot && statWaitRange) {
      statTrafficLevel.textContent = traffic.level;
      statTrafficLevel.className = `text-xl font-display font-bold ${traffic.color}`;
      trafficDot.className = `w-2.5 h-2.5 rounded-full ${traffic.dot}`;
      statWaitRange.textContent = traffic.range;
    }

    const statNewTokenEta = document.getElementById('statNewTokenEta');
    if (statNewTokenEta) {
      const walkInWait = calculateWaitMinutes(waitingTokens.length + 1, q.avgConsultationMinutes || 5, doc.delayMinutes);
      statNewTokenEta.textContent = `~${walkInWait} min`;
    }

    // Currently Serving Hero Card
    const currentTokenEl = document.getElementById('currentServingTokenNumber');
    const currentPatientNameEl = document.getElementById('currentServingPatientName');
    const currentChamberNameEl = document.getElementById('currentChamberName');
    const currentDoctorNameEl = document.getElementById('currentDoctorName');
    const currentDoctorSpecialtyEl = document.getElementById('currentDoctorSpecialty');
    const currentDoctorAvatarContainer = document.getElementById('currentDoctorAvatarContainer');
    const currentServingTimeInEl = document.getElementById('currentServingTimeIn');
    const priorityBadgeEl = document.getElementById('currentServingPriorityBadge');

    if (currentDoctorNameEl) currentDoctorNameEl.textContent = doc.name;
    if (currentDoctorSpecialtyEl) currentDoctorSpecialtyEl.textContent = `${doc.specialty} (${doc.clinicName})`;
    if (currentChamberNameEl) currentChamberNameEl.textContent = doc.chamber;
    if (currentDoctorAvatarContainer) {
      currentDoctorAvatarContainer.innerHTML = `<img src="${doc.img}" class="w-full h-full object-cover">`;
    }

    if (servingToken) {
      if (currentTokenEl) currentTokenEl.textContent = `#${servingToken.token}`;
      if (currentPatientNameEl) currentPatientNameEl.textContent = `${servingToken.patientName} (${servingToken.patientCode})`;
      if (currentServingTimeInEl) currentServingTimeInEl.textContent = `Called inside: ${servingToken.timeInChamber || '10:00 AM'}`;

      if (priorityBadgeEl) {
        if (servingToken.category === 'Emergency') {
          priorityBadgeEl.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-500 text-white';
          priorityBadgeEl.innerHTML = `<i data-lucide="alert-triangle" class="w-3 h-3"></i> Emergency Priority`;
        } else if (servingToken.category === 'Senior Citizen') {
          priorityBadgeEl.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-900';
          priorityBadgeEl.innerHTML = `<i data-lucide="heart" class="w-3 h-3"></i> Senior Citizen (60+)`;
        } else {
          priorityBadgeEl.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white';
          priorityBadgeEl.innerHTML = `<i data-lucide="user" class="w-3 h-3"></i> General Consultation`;
        }
      }
    } else {
      if (currentTokenEl) currentTokenEl.textContent = '--';
      if (currentPatientNameEl) currentPatientNameEl.textContent = 'Chamber Ready for Next Patient';
      if (currentServingTimeInEl) currentServingTimeInEl.textContent = 'Please call the next token';
      if (priorityBadgeEl) priorityBadgeEl.innerHTML = '';
    }

    // Next in Line List (Top 4)
    const nextTokensContainer = document.getElementById('nextTokensList');
    const upcomingBadge = document.getElementById('upcomingCountBadge');
    if (upcomingBadge) upcomingBadge.textContent = `${waitingTokens.length} tokens waiting`;

    if (nextTokensContainer) {
      const top4 = waitingTokens.slice(0, 4);
      if (top4.length === 0) {
        nextTokensContainer.innerHTML = `
          <div class="py-8 text-center text-slate-400 text-xs font-semibold">
            <i data-lucide="coffee" class="w-8 h-8 mx-auto mb-2 opacity-40"></i>
            No patients waiting right now. Immediate consultation available!
          </div>
        `;
      } else {
        nextTokensContainer.innerHTML = top4.map((t, idx) => {
          const waitMins = calculateWaitMinutes(idx + 1, q.avgConsultationMinutes || 5, doc.delayMinutes);
          let badgeHtml = '';
          if (t.category === 'Emergency') {
            badgeHtml = `<span class="px-2 py-0.5 text-[10px] font-extrabold rounded-md badge-emergency">🚨 Emergency</span>`;
          } else if (t.category === 'Senior Citizen') {
            badgeHtml = `<span class="px-2 py-0.5 text-[10px] font-extrabold rounded-md badge-senior">🧓 Senior 60+</span>`;
          } else {
            badgeHtml = `<span class="px-2 py-0.5 text-[10px] font-semibold rounded-md badge-general">General</span>`;
          }

          const hasPreCheck = t.preCheck && t.preCheck.completed;

          return `
            <div class="py-3 flex items-center justify-between gap-3 group hover:bg-slate-50/80 px-2 rounded-xl transition-colors">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-brand-50 group-hover:text-brand-600 flex items-center justify-center font-display font-extrabold text-base text-slate-800 transition-colors">
                  #${t.token}
                </div>
                <div class="flex items-center gap-2">
                  <img src="${t.avatar || PRESET_AVATARS[0]}" class="w-8 h-8 rounded-full object-cover border border-slate-200">
                  <div>
                    <div class="flex items-center gap-2">
                      <h5 class="text-sm font-bold text-slate-800">${t.patientName}</h5>
                      ${badgeHtml}
                    </div>
                    <div class="flex items-center gap-2 text-[11px] text-slate-500">
                      <span>${t.patientCode}</span>
                      <span>•</span>
                      <span>Age: ${t.age}</span>
                      ${hasPreCheck ? `<span class="text-emerald-600 font-bold flex items-center gap-0.5"><i data-lucide="check-check" class="w-3 h-3"></i> Pre-Check Done</span>` : ''}
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-right shrink-0">
                <span class="text-xs font-bold text-slate-800 block">~${waitMins} min</span>
                <span class="text-[10px] text-slate-400 font-medium">Est. Wait</span>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    // Full Queue Table Body
    const tableBody = document.getElementById('fullQueueTableBody');
    if (tableBody) {
      let filtered = q.tokens;
      if (currentFilter === 'priority') {
        filtered = q.tokens.filter(t => t.category === 'Emergency' || t.category === 'Senior Citizen');
      } else if (currentFilter === 'waiting') {
        filtered = q.tokens.filter(t => t.status === 'Waiting');
      }

      if (filtered.length === 0) {
        tableBody.innerHTML = `
          <tr>
            <td colspan="7" class="py-8 text-center text-xs text-slate-400 font-medium">
              No matching tokens found for this filter.
            </td>
          </tr>
        `;
      } else {
        tableBody.innerHTML = filtered.map((t) => {
          const isServing = t.status === 'Serving';
          const waitPos = isServing ? 0 : waitingTokens.findIndex(w => w.token === t.token) + 1;
          const estWait = isServing ? 'Now Consulting' : `~${calculateWaitMinutes(waitPos, q.avgConsultationMinutes || 5, doc.delayMinutes)} mins`;
          const estDuration = `${q.avgConsultationMinutes || 5} mins`;

          let catBadge = '';
          if (t.category === 'Emergency') {
            catBadge = `<span class="px-2.5 py-1 text-xs font-bold rounded-lg badge-emergency">🚨 Emergency</span>`;
          } else if (t.category === 'Senior Citizen') {
            catBadge = `<span class="px-2.5 py-1 text-xs font-bold rounded-lg badge-senior">🧓 Senior 60+</span>`;
          } else {
            catBadge = `<span class="px-2.5 py-1 text-xs font-semibold rounded-lg badge-general">General</span>`;
          }

          const hasPreCheck = t.preCheck && t.preCheck.completed;

          return `
            <tr class="hover:bg-slate-50/60 transition-colors ${isServing ? 'bg-blue-50/40 font-semibold' : ''}">
              <td class="py-3.5 px-4 sm:px-6 font-display font-extrabold text-base ${isServing ? 'text-brand-600' : 'text-slate-900'}">
                #${t.token}
              </td>
              <td class="py-3.5 px-4">
                <div class="flex items-center gap-2.5">
                  <img src="${t.avatar || PRESET_AVATARS[0]}" class="w-8 h-8 rounded-full object-cover border border-slate-200">
                  <div>
                    <div class="font-bold text-slate-900">${t.patientName}</div>
                    <div class="text-xs text-slate-400 font-mono">${t.patientCode} • ${t.age} yrs</div>
                  </div>
                </div>
              </td>
              <td class="py-3.5 px-4">
                ${catBadge}
              </td>
              <td class="py-3.5 px-4 text-xs font-medium text-slate-600">
                ${estDuration}
              </td>
              <td class="py-3.5 px-4 text-xs font-bold ${isServing ? 'text-brand-600' : 'text-slate-800'}">
                ${estWait}
              </td>
              <td class="py-3.5 px-4 text-xs">
                ${hasPreCheck ? `
                  <button onclick="window.ParchiTrack.openVitalsModal(${t.token})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold border border-emerald-200 transition-colors">
                    <i data-lucide="file-check" class="w-3.5 h-3.5"></i>
                    <span>View Vitals</span>
                  </button>
                ` : `
                  <span class="text-slate-400 text-xs italic">Pending</span>
                `}
              </td>
              <td class="py-3.5 px-4 sm:px-6 text-right">
                ${isServing ? `
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-100 text-brand-700">
                    <span class="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
                    In Chamber
                  </span>
                ` : `
                  <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                    Waiting (${waitPos} in line)
                  </span>
                `}
              </td>
            </tr>
          `;
        }).join('');
      }
    }
  }

  // TAB 4: Location & Distance Route Assistant
  function renderClinicRouteAssistant() {
    const doc = getCurrentDoctor();
    const q = getCurrentQueue();
    const waitingTokens = q.tokens.filter(t => t.status === 'Waiting');
    
    // Calculate waiting time
    const waitMins = calculateWaitMinutes(waitingTokens.length + 1, q.avgConsultationMinutes || 5, doc.delayMinutes);
    const commuteMins = doc.travelMinutesCar || 8;
    const leaveBuffer = Math.max(0, waitMins - commuteMins);

    const adviceHeadline = document.getElementById('travelAdviceHeadline');
    const adviceSubtext = document.getElementById('travelAdviceSubtext');
    const travelCommuteTime = document.getElementById('travelCommuteTime');
    const travelDistanceKm = document.getElementById('travelDistanceKm');
    const mapClinicDestinationLabel = document.getElementById('mapClinicDestinationLabel');
    const routeClinicName = document.getElementById('routeClinicName');
    const routeClinicAddress = document.getElementById('routeClinicAddress');
    const routeSummaryBadge = document.getElementById('routeSummaryBadge');
    const openGoogleMapsLink = document.getElementById('openGoogleMapsLink');

    if (adviceHeadline) {
      if (leaveBuffer > 0) {
        adviceHeadline.textContent = `Leave in ~${leaveBuffer} mins for zero waiting`;
      } else {
        adviceHeadline.textContent = `Leave immediately (Chamber Ready Soon)`;
      }
    }

    if (adviceSubtext) {
      adviceSubtext.textContent = `Your travel distance to ${doc.clinicName} is ${doc.distanceKm} km (~${commuteMins} min drive). Currently ${waitingTokens.length} patients are in line ahead, providing approximately ${waitMins} minutes until your token enters the chamber.`;
    }

    if (travelCommuteTime) travelCommuteTime.textContent = `~${commuteMins} min`;
    if (travelDistanceKm) travelDistanceKm.textContent = `${doc.distanceKm} km drive`;
    if (mapClinicDestinationLabel) mapClinicDestinationLabel.textContent = doc.clinicName;
    if (routeClinicName) routeClinicName.textContent = doc.clinicName;
    if (routeClinicAddress) routeClinicAddress.textContent = `${doc.locality} • ${doc.chamber}`;
    if (routeSummaryBadge) routeSummaryBadge.textContent = `Normal Traffic • ${commuteMins} mins via Main Road`;

    if (openGoogleMapsLink) {
      const query = encodeURIComponent(`${doc.clinicName}, ${doc.locality}`);
      openGoogleMapsLink.href = `https://www.google.com/maps/dir/?api=1&destination=${query}`;
    }
  }

  // TAB 5: Doctor Chambers Grid
  function renderDoctorChambers() {
    const container = document.getElementById('doctorChamberCardsContainer');
    if (!container) return;

    container.innerHTML = doctors.map(doc => {
      let statusBadge = '';
      if (doc.doctorStatus === 'Available') {
        statusBadge = `<span class="px-3 py-1 text-xs font-bold bg-emerald-100 text-emerald-800 rounded-full flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Available & Consulting</span>`;
      } else if (doc.doctorStatus === 'Delayed') {
        statusBadge = `<span class="px-3 py-1 text-xs font-bold bg-amber-100 text-amber-800 rounded-full flex items-center gap-1"><i data-lucide="clock" class="w-3 h-3"></i> Running ${doc.delayMinutes}m Behind</span>`;
      } else {
        statusBadge = `<span class="px-3 py-1 text-xs font-bold bg-slate-100 text-slate-600 rounded-full">Not Started</span>`;
      }

      const q = queues[doc.id] || { currentlyServing: '--', tokens: [] };
      const activeWaiting = q.tokens.filter(t => t.status === 'Waiting').length;

      return `
        <div class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-card flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold uppercase text-slate-400 tracking-wider">${doc.chamber}</span>
              ${statusBadge}
            </div>

            <div class="flex items-start gap-4">
              <img src="${doc.img}" class="w-14 h-14 rounded-2xl object-cover border border-slate-200 shadow-2xs">
              <div>
                <h4 class="font-display font-extrabold text-xl text-slate-900">${doc.name}</h4>
                <p class="text-xs sm:text-sm text-brand-700 font-semibold">${doc.specialty}</p>
                <p class="text-xs text-slate-500 mt-1">${doc.clinicName} • ${doc.locality}</p>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center">
              <div class="bg-slate-50 p-2.5 rounded-xl">
                <span class="text-[10px] text-slate-400 font-bold uppercase block">Serving Now</span>
                <span class="text-base font-display font-extrabold text-brand-600">#${q.currentlyServing || '--'}</span>
              </div>
              <div class="bg-slate-50 p-2.5 rounded-xl">
                <span class="text-[10px] text-slate-400 font-bold uppercase block">Queue Wait</span>
                <span class="text-base font-display font-extrabold text-slate-800">${activeWaiting} Patients</span>
              </div>
              <div class="bg-slate-50 p-2.5 rounded-xl">
                <span class="text-[10px] text-slate-400 font-bold uppercase block">Speed</span>
                <span class="text-base font-display font-extrabold text-slate-800">~${q.avgConsultationMinutes || 5}m/pt</span>
              </div>
            </div>

            ${doc.delayMinutes > 0 ? `
              <div class="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                <i data-lucide="info" class="w-4 h-4 text-amber-600 shrink-0 mt-0.5"></i>
                <div>
                  <strong>Delay Note:</strong> ${doc.delayReason || 'Doctor attending a complex case. Next tokens buffered by ' + doc.delayMinutes + ' mins.'}
                </div>
              </div>
            ` : ''}
          </div>

          <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
            <span class="text-slate-500 font-medium">Hours: ${doc.workingHours}</span>
            <button onclick="window.ParchiTrack.switchDoctor('${doc.id}')" class="font-bold text-brand-600 hover:text-brand-800 flex items-center gap-1">
              <span>Connect to Chamber</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // TAB 6: Digital Pre-Check Options & Upload Preview
  function renderPreCheckOptions() {
    const select = document.getElementById('preCheckTokenSelect');
    const q = getCurrentQueue();
    if (select) {
      select.innerHTML = q.tokens.map(t => `
        <option value="${t.token}">
          Token #${t.token} - ${t.patientName} (${t.category})
        </option>
      `).join('');
    }

    const chipsContainer = document.getElementById('symptomChipsContainer');
    if (chipsContainer) {
      chipsContainer.innerHTML = COMMON_SYMPTOMS.map(s => {
        const isSelected = selectedSymptoms.has(s.label);
        return `
          <div class="symptom-chip ${isSelected ? 'selected' : ''}" onclick="window.ParchiTrack.toggleSymptom('${s.label}')">
            <i data-lucide="${s.icon}" class="w-4 h-4 shrink-0 text-brand-600"></i>
            <span class="truncate">${s.label}</span>
          </div>
        `;
      }).join('');
    }

    renderUploadedFilesList();
  }

  function renderUploadedFilesList() {
    const list = document.getElementById('uploadedFilesPreviewList');
    if (!list) return;

    if (tempUploadedFiles.length === 0) {
      list.innerHTML = '';
      return;
    }

    list.innerHTML = tempUploadedFiles.map((f, i) => `
      <div class="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
        <div class="flex items-center gap-2">
          <i data-lucide="file-text" class="w-4 h-4 text-brand-600"></i>
          <span class="font-bold text-slate-800">${f.name}</span>
          <span class="text-slate-400">(${f.size})</span>
        </div>
        <button type="button" onclick="window.ParchiTrack.removeUploadedFile(${i})" class="text-rose-500 hover:text-rose-700">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // TAB 7: Clinic Staff & Doctor Control Desk
  function renderClinicStaffDesk() {
    const table = document.getElementById('clinicStaffQueueTable');
    if (!table) return;

    const q = getCurrentQueue();
    q.tokens = sortWaitingTokens(q.tokens);
    const waiting = q.tokens.filter(t => t.status === 'Waiting');

    if (waiting.length === 0) {
      table.innerHTML = `
        <tr>
          <td colspan="7" class="py-8 text-center text-xs text-slate-400 font-medium">
            Queue is empty. No patients currently waiting.
          </td>
        </tr>
      `;
      return;
    }

    table.innerHTML = waiting.map((t) => {
      let priorityClass = 'badge-general';
      if (t.category === 'Emergency') priorityClass = 'badge-emergency';
      if (t.category === 'Senior Citizen') priorityClass = 'badge-senior';

      const hasPreCheck = t.preCheck && t.preCheck.completed;

      return `
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="py-3 px-4 font-display font-extrabold text-base text-slate-900">
            #${t.token}
          </td>
          <td class="py-3 px-4">
            <div class="flex items-center gap-2">
              <img src="${t.avatar || PRESET_AVATARS[0]}" class="w-8 h-8 rounded-full object-cover border border-slate-200">
              <div>
                <span class="font-bold text-slate-900 block">${t.patientName}</span>
                <span class="text-xs text-slate-400 font-mono">${t.patientCode}</span>
              </div>
            </div>
          </td>
          <td class="py-3 px-4 text-xs text-slate-600">
            ${t.age} yrs • <span class="font-mono">${t.phone}</span>
          </td>
          <td class="py-3 px-4">
            <span class="px-2.5 py-1 text-xs font-bold rounded-lg ${priorityClass}">
              ${t.category}
            </span>
          </td>
          <td class="py-3 px-4">
            ${hasPreCheck ? `
              <button onclick="window.ParchiTrack.openVitalsModal(${t.token})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold text-xs border border-emerald-200">
                <i data-lucide="eye" class="w-3.5 h-3.5"></i>
                <span>Review Vitals</span>
              </button>
            ` : `
              <span class="text-slate-400 text-xs">No Pre-Check</span>
            `}
          </td>
          <td class="py-3 px-4 text-center">
            <div class="inline-flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
              <button onclick="window.ParchiTrack.setTokenPriority(${t.token}, 'Emergency')" title="Set as Emergency (Top Slot)" class="px-2 py-0.5 rounded-lg text-xs font-bold ${t.category === 'Emergency' ? 'bg-rose-500 text-white' : 'text-slate-600 hover:bg-white'}">
                🚨
              </button>
              <button onclick="window.ParchiTrack.setTokenPriority(${t.token}, 'Senior Citizen')" title="Set as Senior Citizen (Fair Interleave)" class="px-2 py-0.5 rounded-lg text-xs font-bold ${t.category === 'Senior Citizen' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-white'}">
                🧓
              </button>
              <button onclick="window.ParchiTrack.setTokenPriority(${t.token}, 'General')" title="Standard General Walk-in" class="px-2 py-0.5 rounded-lg text-xs font-bold ${t.category === 'General' ? 'bg-slate-700 text-white' : 'text-slate-600 hover:bg-white'}">
                👤
              </button>
            </div>
          </td>
          <td class="py-3 px-4 text-right">
            <button onclick="window.ParchiTrack.callSpecificToken(${t.token})" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1">
              <i data-lucide="megaphone" class="w-3 h-3"></i>
              <span>Call Now</span>
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  // TAB 8: Network Clinics List (SaaS Hub)
  function renderNetworkClinics() {
    const container = document.getElementById('networkClinicsList');
    if (!container) return;

    container.innerHTML = doctors.map(d => {
      const q = queues[d.id] || { currentlyServing: 1 };
      const isActive = d.id === currentDoctorId;

      return `
        <div class="p-4 rounded-2xl border ${isActive ? 'border-brand-500 bg-brand-50/30' : 'border-slate-200 bg-slate-50/50'} flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Chamber Node</span>
              ${isActive ? '<span class="px-2 py-0.5 bg-brand-600 text-white text-[10px] font-bold rounded-full">Active View</span>' : ''}
            </div>
            <h4 class="font-display font-bold text-slate-900 text-base">${d.clinicName}</h4>
            <p class="text-xs text-brand-600 font-semibold">${d.name} • ${d.specialty}</p>
            <p class="text-xs text-slate-500 mt-1">${d.locality}</p>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
            <span class="text-slate-600 font-medium">Serving: <strong>#${q.currentlyServing}</strong></span>
            <button onclick="window.ParchiTrack.switchDoctor('${d.id}')" class="px-3 py-1 bg-white border border-slate-300 hover:border-brand-500 text-slate-800 font-bold rounded-lg transition-colors">
              Connect
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // TV Kiosk Fullscreen Renderer
  function renderTvDisplay() {
    const doc = getCurrentDoctor();
    const q = getCurrentQueue();
    const serving = q.tokens.find(t => t.status === 'Serving');
    const waiting = q.tokens.filter(t => t.status === 'Waiting');

    const tvTitle = document.getElementById('tvClinicTitle');
    const tvChamberNumber = document.getElementById('tvChamberNumber');
    const tvCurrentToken = document.getElementById('tvCurrentToken');
    const tvDoctorName = document.getElementById('tvDoctorName');
    const tvPatientName = document.getElementById('tvPatientName');
    const tvPriorityBadge = document.getElementById('tvPriorityBadge');
    const tvUpcomingList = document.getElementById('tvUpcomingTokensList');

    if (tvTitle) tvTitle.textContent = doc.clinicName;
    if (tvChamberNumber) tvChamberNumber.textContent = doc.chamber;
    if (tvDoctorName) tvDoctorName.textContent = doc.name;

    if (serving) {
      if (tvCurrentToken) tvCurrentToken.textContent = `#${serving.token}`;
      if (tvPatientName) tvPatientName.textContent = serving.patientName;
      if (tvPriorityBadge) {
        tvPriorityBadge.textContent = serving.category === 'Emergency' ? '🚨 EMERGENCY' : (serving.category === 'Senior Citizen' ? '🧓 SENIOR CITIZEN' : 'GENERAL CONSULTATION');
      }
    } else {
      if (tvCurrentToken) tvCurrentToken.textContent = '--';
      if (tvPatientName) tvPatientName.textContent = 'Chamber Ready';
      if (tvPriorityBadge) tvPriorityBadge.textContent = 'WAITING';
    }

    if (tvUpcomingList) {
      const next4 = waiting.slice(0, 4);
      if (next4.length === 0) {
        tvUpcomingList.innerHTML = `<p class="text-slate-500 text-sm py-4">No waiting patients</p>`;
      } else {
        tvUpcomingList.innerHTML = next4.map((t, i) => `
          <div class="py-3 flex items-center justify-between text-base">
            <div class="flex items-center gap-3">
              <span class="text-2xl font-mono font-black text-brand-400">#${t.token}</span>
              <div>
                <span class="font-bold text-white block">${t.patientName}</span>
                <span class="text-xs text-slate-400">${t.category}</span>
              </div>
            </div>
            <span class="text-xs font-semibold px-2.5 py-1 bg-slate-800 text-slate-300 rounded-lg">
              ${i === 0 ? 'Next' : `Wait ~${(i + 1) * (q.avgConsultationMinutes || 5)}m`}
            </span>
          </div>
        `).join('');
      }
    }
  }

  // ==========================================================================
  // 6. DOCTOR PORTFOLIO & PATIENT REVIEWS MODAL LOGIC
  // ==========================================================================
  let activePortfolioDoctorId = null;

  function openDoctorPortfolio(doctorId) {
    const doc = doctors.find(d => d.id === doctorId) || doctors[0];
    activePortfolioDoctorId = doc.id;

    const modal = document.getElementById('doctorPortfolioModal');
    if (!modal) return;

    // Header Info
    document.getElementById('portfolioDoctorImg').src = doc.img;
    document.getElementById('portfolioDoctorName').textContent = doc.name;
    document.getElementById('portfolioDoctorSpecialty').textContent = doc.specialty;
    document.getElementById('portfolioDoctorQualifications').textContent = doc.title;
    document.getElementById('portfolioDoctorRating').textContent = doc.rating;
    document.getElementById('portfolioReviewsCount').textContent = doc.reviews.length;
    document.getElementById('portfolioDoctorExperience').textContent = `${doc.experience} experience`;
    document.getElementById('portfolioDoctorFee').textContent = `${doc.fee} consultation`;

    // Facility & Wait Info
    document.getElementById('portfolioClinicName').textContent = doc.clinicName;
    document.getElementById('portfolioClinicLocality').textContent = doc.locality;
    document.getElementById('portfolioDistanceKm').innerHTML = `<i data-lucide="navigation" class="w-3.5 h-3.5 text-brand-600"></i> <span>${doc.distanceKm} km</span>`;
    document.getElementById('portfolioCommuteTime').textContent = `~${doc.travelMinutesCar} mins drive`;

    const q = queues[doc.id] || { currentlyServing: '--', tokens: [] };
    const waitCount = q.tokens.filter(t => t.status === 'Waiting').length;
    document.getElementById('portfolioLiveQueueState').innerHTML = `
      <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
      <span>Serving Token #${q.currentlyServing}</span>
    `;
    document.getElementById('portfolioEstimatedWait').textContent = `Queue: ${waitCount} waiting (~${calculateWaitMinutes(waitCount + 1, q.avgConsultationMinutes || 5, doc.delayMinutes)}m wait)`;

    // Bio & Diseases
    document.getElementById('portfolioDoctorBio').textContent = doc.bio;
    document.getElementById('portfolioDoctorDiseases').innerHTML = doc.diseases.map(d => `
      <span class="px-2.5 py-1 bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold rounded-lg">${d}</span>
    `).join('');

    // Reviews List
    renderPortfolioReviews(doc);

    // Book button hook
    const bookBtn = document.getElementById('portfolioBookTokenBtn');
    if (bookBtn) {
      bookBtn.onclick = () => {
        closeModal('doctorPortfolioModal');
        bookTokenWithDoctor(doc.id);
      };
    }

    renderStarPicker();
    modal.classList.remove('hidden');
    if (window.lucide) window.lucide.createIcons();
  }

  function renderPortfolioReviews(doc) {
    const list = document.getElementById('portfolioReviewsList');
    if (!list) return;

    if (!doc.reviews || doc.reviews.length === 0) {
      list.innerHTML = `<p class="text-xs text-slate-400 italic">No reviews yet. Be the first to review!</p>`;
      return;
    }

    list.innerHTML = doc.reviews.map(r => `
      <div class="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5 text-xs">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="font-bold text-slate-900">${r.author}</span>
            ${r.verified ? '<span class="px-1.5 py-0.2 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded">Verified Patient</span>' : ''}
          </div>
          <span class="text-amber-500 font-bold">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
        </div>
        <p class="text-slate-600 leading-relaxed">${r.comment}</p>
        <span class="text-[10px] text-slate-400 block">${r.date}</span>
      </div>
    `).join('');
  }

  function toggleWriteReviewBox() {
    const box = document.getElementById('writeReviewBox');
    if (box) box.classList.toggle('hidden');
  }

  function renderStarPicker() {
    const container = document.getElementById('reviewStarPicker');
    if (!container) return;

    container.innerHTML = [1, 2, 3, 4, 5].map(star => `
      <span onclick="window.ParchiTrack.setReviewRating(${star})" class="text-lg ${star <= pendingReviewRating ? 'text-amber-400' : 'text-slate-300'} hover:scale-110 transition-transform">
        ★
      </span>
    `).join('');
  }

  function submitPatientReview() {
    const doc = doctors.find(d => d.id === activePortfolioDoctorId);
    if (!doc) return;

    const comment = document.getElementById('reviewCommentInput')?.value;
    if (!comment || !comment.trim()) {
      showToast('Please type your review comment.', 'warning');
      return;
    }

    const newReview = {
      author: currentUser.isLoggedIn ? currentUser.name : 'Verified Patient',
      date: 'Just now',
      rating: pendingReviewRating,
      verified: true,
      comment: comment.trim()
    };

    if (!doc.reviews) doc.reviews = [];
    doc.reviews.unshift(newReview);
    doc.reviewsCount = doc.reviews.length;

    // Recalculate average rating
    const total = doc.reviews.reduce((acc, r) => acc + r.rating, 0);
    doc.rating = parseFloat((total / doc.reviews.length).toFixed(2));

    saveStorage();
    renderPortfolioReviews(doc);
    document.getElementById('portfolioDoctorRating').textContent = doc.rating;
    document.getElementById('portfolioReviewsCount').textContent = doc.reviews.length;
    document.getElementById('reviewCommentInput').value = '';
    toggleWriteReviewBox();
    showToast('Thank you! Your verified review has been published.', 'success');
  }

  // ==========================================================================
  // 7. MULTI-ROLE AUTHENTICATION & DP UPLOAD LOGIC
  // ==========================================================================
  function openAuthModal(defaultRole = 'patient') {
    authModalRole = defaultRole;
    authIsSignUp = false;
    setAuthRole(defaultRole);
    updateAuthModalView();
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.remove('hidden');
  }

  function setAuthRole(role) {
    authModalRole = role;
    const patientTab = document.getElementById('authRolePatientTab');
    const doctorTab = document.getElementById('authRoleDoctorTab');

    if (role === 'patient') {
      patientTab.className = 'py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 bg-white text-slate-900 shadow-sm';
      doctorTab.className = 'py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 text-blue-200 hover:text-white';
    } else {
      doctorTab.className = 'py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 bg-white text-slate-900 shadow-sm';
      patientTab.className = 'py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 text-blue-200 hover:text-white';
    }

    updateAuthModalView();
  }

  function toggleAuthMode() {
    authIsSignUp = !authIsSignUp;
    updateAuthModalView();
  }

  function updateAuthModalView() {
    const title = document.getElementById('authFormTitle');
    const toggleBtn = document.getElementById('toggleAuthModeBtn');
    const nameField = document.getElementById('authNameField');
    const dpField = document.getElementById('authProfilePicField');
    const docFields = document.getElementById('authDoctorExtraFields');
    const submitText = document.getElementById('authSubmitText');

    const roleName = authModalRole === 'doctor' ? 'Doctor' : 'Patient';

    if (authIsSignUp) {
      if (title) title.textContent = `New ${roleName} Registration`;
      if (toggleBtn) toggleBtn.textContent = 'Already registered? Sign In';
      if (nameField) nameField.classList.remove('hidden');
      if (dpField) dpField.classList.remove('hidden');
      if (docFields) docFields.classList.toggle('hidden', authModalRole !== 'doctor');
      if (submitText) submitText.textContent = `Create ${roleName} Account`;
    } else {
      if (title) title.textContent = `${roleName} Sign In`;
      if (toggleBtn) toggleBtn.textContent = 'Need an account? Sign Up';
      if (nameField) nameField.classList.add('hidden');
      if (dpField) dpField.classList.add('hidden');
      if (docFields) docFields.classList.add('hidden');
      if (submitText) submitText.textContent = `Sign In as ${roleName}`;
    }

    renderPresetAvatars();
  }

  function renderPresetAvatars() {
    const container = document.getElementById('authPresetAvatars');
    const preview = document.getElementById('authDpPreview');
    if (!container) return;

    container.innerHTML = PRESET_AVATARS.map(av => `
      <img 
        src="${av}" 
        onclick="window.ParchiTrack.selectPresetAvatar('${av}')" 
        class="w-7 h-7 rounded-full object-cover border-2 ${tempAuthAvatar === av ? 'border-brand-600 scale-110' : 'border-slate-200'} cursor-pointer hover:border-brand-500 transition-all"
      >
    `).join('');

    if (preview) {
      preview.innerHTML = `<img src="${tempAuthAvatar}" class="w-full h-full object-cover">`;
    }
  }

  function selectPresetAvatar(url) {
    tempAuthAvatar = url;
    renderPresetAvatars();
  }

  function loginQuickDemo(role) {
    if (role === 'doctor') {
      currentUser = {
        isLoggedIn: true,
        role: 'doctor',
        name: 'Dr. Rajesh Verma',
        identifier: 'dr.verma@apexhealth.com',
        avatar: INITIAL_DOCTORS[1].img,
        doctorId: 'doc-2'
      };
      currentDoctorId = 'doc-2';
    } else {
      currentUser = {
        isLoggedIn: true,
        role: 'patient',
        name: 'Rahul Sharma',
        identifier: 'rahul.patient@gmail.com',
        avatar: PRESET_AVATARS[3],
        doctorId: null
      };
    }
    saveStorage();
    closeModal('authModal');
    renderApp();
    showToast(`Logged in successfully as ${currentUser.name} (${currentUser.role})!`, 'success');
  }

  function logoutUser() {
    // Flush full state FIRST — preserves any newly-registered doctors/queues/accounts
    try {
      localStorage.setItem('parchitrack_doctors_v2', JSON.stringify(doctors));
      localStorage.setItem('parchitrack_queues_v2', JSON.stringify(queues));
      localStorage.setItem('parchitrack_accounts_v2', JSON.stringify(accounts));
    } catch (e) { /* storage full or blocked */ }

    currentUser = {
      isLoggedIn: false,
      role: 'patient',
      name: '',
      identifier: '',
      avatar: null,
      doctorId: null
    };
    saveStorage();   // saves cleared currentUser (doctors/queues/accounts already flushed)
    currentDoctorId = doctors[0]?.id || 'doc-1'; // reset view to first available doctor
    renderApp();
    showToast('Signed out successfully. Doctor profiles remain available for patients to find.');
  }

  // ==========================================================================
  // 8. ACTIONS: CALL NEXT, PRIORITY DISPATCH & TOKEN BOOKING
  // ==========================================================================
  function callNextToken() {
    const doc = getCurrentDoctor();
    const q = getCurrentQueue();
    q.tokens = sortWaitingTokens(q.tokens);

    const currentlyServing = q.tokens.find(t => t.status === 'Serving');
    const nextInLine = q.tokens.find(t => t.status === 'Waiting');

    if (!nextInLine) {
      showToast(`No more waiting patients for ${doc.name}!`);
      return;
    }

    if (currentlyServing) {
      currentlyServing.status = 'Completed';
      if (!q.completedTokens) q.completedTokens = [];
      q.completedTokens.push(currentlyServing.token);
    }

    nextInLine.status = 'Serving';
    const now = new Date();
    nextInLine.timeInChamber = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    q.currentlyServing = nextInLine.token;

    saveStorage();
    playHospitalChime();
    renderApp();

    showToast(`Calling Token #${nextInLine.token}: ${nextInLine.patientName} into ${doc.chamber}!`, 'success');

    const heroCard = document.getElementById('currentServingTokenNumber');
    if (heroCard) {
      heroCard.classList.add('token-call-active');
      setTimeout(() => heroCard.classList.remove('token-call-active'), 1200);
    }
  }

  function callSpecificToken(tokenNum) {
    const doc = getCurrentDoctor();
    const q = getCurrentQueue();
    const token = q.tokens.find(t => t.token === tokenNum);
    if (!token) return;

    const currentServing = q.tokens.find(t => t.status === 'Serving');
    if (currentServing) {
      currentServing.status = 'Completed';
      q.completedTokens.push(currentServing.token);
    }

    token.status = 'Serving';
    token.timeInChamber = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    q.currentlyServing = token.token;

    saveStorage();
    playHospitalChime();
    renderApp();
    showToast(`Calling Token #${token.token} (${token.patientName}) into chamber!`, 'success');
  }

  function setTokenPriority(tokenNum, newCategory) {
    const q = getCurrentQueue();
    const token = q.tokens.find(t => t.token === tokenNum);
    if (!token) return;

    token.category = newCategory;
    q.tokens = sortWaitingTokens(q.tokens);
    saveStorage();
    renderApp();

    if (newCategory === 'Emergency') {
      showToast(`Token #${tokenNum} promoted to 🚨 EMERGENCY PRIORITY (Next in line)!`, 'warning');
      playHospitalChime();
    } else if (newCategory === 'Senior Citizen') {
      showToast(`Token #${tokenNum} tagged as 🧓 SENIOR CITIZEN (Fairly interleaved priority).`);
    } else {
      showToast(`Token #${tokenNum} set to General Walk-in status.`);
    }
  }

  function addDoctorDelay(minutes = 15) {
    const doc = getCurrentDoctor();
    doc.doctorStatus = 'Delayed';
    doc.delayMinutes = (doc.delayMinutes || 0) + minutes;
    doc.delayReason = 'Doctor attending an emergency patient clinical complication';

    saveStorage();
    renderApp();
    showToast(`Doctor Delay of +${minutes} mins added. Patient wait estimates calibrated.`, 'warning');
  }

  function dismissDelayAlert() {
    const doc = getCurrentDoctor();
    doc.delayMinutes = 0;
    doc.doctorStatus = 'Available';
    doc.delayReason = '';
    saveStorage();
    renderApp();
    showToast('Doctor delay alert cleared. Queue running at normal velocity.');
  }

  function bookTokenWithDoctor(doctorId) {
    currentDoctorId = doctorId;
    switchTab('my-token');
    const select = document.getElementById('bookDoctorSelect');
    if (select) select.value = doctorId;
  }

  function addNewToken(patientName, age, phone, category = 'General', assignedDocId = currentDoctorId) {
    const doc = doctors.find(d => d.id === assignedDocId) || getCurrentDoctor();
    const q = queues[doc.id];

    let maxToken = 0;
    q.tokens.forEach(t => { if (t.token > maxToken) maxToken = t.token; });
    if (q.completedTokens) {
      q.completedTokens.forEach(t => { if (t > maxToken) maxToken = t; });
    }
    const nextTokenNum = maxToken + 1;

    // Use current user's avatar if matching, or a pleasant preset
    const avatarToUse = currentUser.isLoggedIn && currentUser.avatar ? currentUser.avatar : PRESET_AVATARS[nextTokenNum % PRESET_AVATARS.length];

    const newToken = {
      token: nextTokenNum,
      patientName: patientName.trim(),
      patientCode: `P-${doc.id.replace('doc-', '')}0${nextTokenNum}`,
      age: parseInt(age, 10),
      phone: phone.trim(),
      category: category,
      status: 'Waiting',
      avatar: avatarToUse,
      preCheck: null
    };

    q.tokens.push(newToken);
    q.tokens = sortWaitingTokens(q.tokens);
    saveStorage();
    renderApp();

    const waitPos = q.tokens.filter(t => t.status === 'Waiting').findIndex(w => w.token === nextTokenNum) + 1;
    const estWait = calculateWaitMinutes(waitPos, q.avgConsultationMinutes || 5, doc.delayMinutes);

    showToast(`Token #${nextTokenNum} booked for ${patientName} with ${doc.name}! Est. wait: ~${estWait} mins.`, 'success');
    return newToken;
  }

  function trackToken(tokenNumber) {
    const q = getCurrentQueue();
    const doc = getCurrentDoctor();
    const token = q.tokens.find(t => t.token === parseInt(tokenNumber, 10));
    const resultBox = document.getElementById('trackResultBox');
    if (!resultBox) return;

    resultBox.classList.remove('hidden');

    if (!token) {
      resultBox.className = 'rounded-2xl p-4 border border-rose-200 bg-rose-50 space-y-2';
      resultBox.innerHTML = `
        <div class="flex items-center gap-2 text-rose-800 font-bold text-sm">
          <i data-lucide="alert-circle" class="w-4 h-4"></i>
          <span>Token #${tokenNumber} Not Found</span>
        </div>
        <p class="text-xs text-rose-700">
          This token is not active in today's chamber for ${doc.name} (${doc.clinicName}).
        </p>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    if (token.status === 'Serving') {
      resultBox.className = 'rounded-2xl p-4 border border-emerald-200 bg-emerald-50 space-y-2';
      resultBox.innerHTML = `
        <div class="flex items-center gap-2 text-emerald-800 font-bold text-base">
          <span class="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
          <span>YOUR TURN NOW! (Token #${token.token})</span>
        </div>
        <p class="text-xs text-emerald-700 font-medium">
          Please proceed immediately to <strong>${doc.chamber}</strong> (${doc.name}).
        </p>
      `;
    } else {
      const waiting = q.tokens.filter(t => t.status === 'Waiting');
      const pos = waiting.findIndex(w => w.token === token.token) + 1;
      const waitMins = calculateWaitMinutes(pos, q.avgConsultationMinutes || 5, doc.delayMinutes);

      resultBox.className = 'rounded-2xl p-4 border border-brand-200 bg-brand-50 space-y-3';
      resultBox.innerHTML = `
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold uppercase text-brand-700">Token Status: Active</span>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${token.category === 'Emergency' ? 'badge-emergency' : (token.category === 'Senior Citizen' ? 'badge-senior' : 'badge-general')}">
            ${token.category}
          </span>
        </div>

        <div class="flex items-baseline justify-between border-y border-brand-100 py-2">
          <div>
            <span class="text-xs text-slate-500 block">Queue Position:</span>
            <span class="text-2xl font-display font-black text-slate-900">${pos} ${pos === 1 ? 'st' : (pos === 2 ? 'nd' : (pos === 3 ? 'rd' : 'th'))} in line</span>
          </div>
          <div class="text-right">
            <span class="text-xs text-slate-500 block">Est. Wait:</span>
            <span class="text-2xl font-display font-black text-brand-600">~${waitMins} min</span>
          </div>
        </div>

        <p class="text-xs text-slate-600">
          Doctor: <strong>${doc.name}</strong> • Chamber: <strong>${doc.chamber}</strong>
        </p>
      `;
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // Pre-Check Form
  function submitPreCheck(tokenNumber, phone, vitals, symptoms, notes, reports) {
    const q = getCurrentQueue();
    const token = q.tokens.find(t => t.token === parseInt(tokenNumber, 10));

    if (!token) {
      showToast('Selected token not found in active list.', 'error');
      return;
    }

    token.phone = phone || token.phone;
    token.preCheck = {
      completed: true,
      symptoms: Array.from(symptoms),
      vitals: vitals,
      notes: notes,
      reports: reports
    };

    saveStorage();
    renderApp();
    showToast(`Pre-check completed for Token #${token.token} (${token.patientName})! Sent to doctor.`, 'success');
  }

  function openVitalsModal(tokenNum) {
    const q = getCurrentQueue();
    const token = q.tokens.find(t => t.token === tokenNum);
    if (!token || !token.preCheck) return;

    const modal = document.getElementById('vitalsReviewModal');
    const title = document.getElementById('modalVitalsTitle');
    const content = document.getElementById('modalVitalsContent');
    if (!modal || !content) return;

    title.textContent = `Pre-Check Vitals: Token #${token.token} - ${token.patientName}`;

    const { vitals, symptoms, reports, notes } = token.preCheck;

    content.innerHTML = `
      <div class="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
        <div class="flex items-center gap-3">
          <img src="${token.avatar || PRESET_AVATARS[0]}" class="w-10 h-10 rounded-full object-cover border border-slate-200">
          <div>
            <h5 class="text-sm font-bold text-slate-900">${token.patientName} (${token.patientCode})</h5>
            <p class="text-xs text-slate-500">Age: ${token.age} yrs • Phone: ${token.phone}</p>
          </div>
        </div>
        <span class="px-2.5 py-1 text-xs font-bold rounded-lg ${token.category === 'Emergency' ? 'badge-emergency' : (token.category === 'Senior Citizen' ? 'badge-senior' : 'badge-general')}">
          ${token.category}
        </span>
      </div>

      <div class="space-y-2">
        <h6 class="text-xs font-bold uppercase text-slate-500 tracking-wider">Health Vitals Log</h6>
        <div class="grid grid-cols-3 sm:grid-cols-5 gap-2 text-center">
          <div class="bg-blue-50/60 p-2.5 rounded-xl border border-blue-100">
            <span class="text-[10px] text-slate-400 font-bold block">BP</span>
            <span class="text-sm font-bold text-slate-800">${vitals.bp || '--'}</span>
            <span class="text-[9px] text-slate-400">mmHg</span>
          </div>
          <div class="bg-blue-50/60 p-2.5 rounded-xl border border-blue-100">
            <span class="text-[10px] text-slate-400 font-bold block">Blood Sugar</span>
            <span class="text-sm font-bold text-slate-800">${vitals.sugar || '--'}</span>
            <span class="text-[9px] text-slate-400">mg/dL</span>
          </div>
          <div class="bg-blue-50/60 p-2.5 rounded-xl border border-blue-100">
            <span class="text-[10px] text-slate-400 font-bold block">Temp</span>
            <span class="text-sm font-bold text-slate-800">${vitals.temp || '--'}</span>
            <span class="text-[9px] text-slate-400">°F</span>
          </div>
          <div class="bg-blue-50/60 p-2.5 rounded-xl border border-blue-100">
            <span class="text-[10px] text-slate-400 font-bold block">Pulse</span>
            <span class="text-sm font-bold text-slate-800">${vitals.pulse || '--'}</span>
            <span class="text-[9px] text-slate-400">BPM</span>
          </div>
          <div class="bg-blue-50/60 p-2.5 rounded-xl border border-blue-100">
            <span class="text-[10px] text-slate-400 font-bold block">SpO2</span>
            <span class="text-sm font-bold text-slate-800">${vitals.spo2 ? vitals.spo2 + '%' : '--'}</span>
            <span class="text-[9px] text-slate-400">Oxygen</span>
          </div>
        </div>
      </div>

      <div class="space-y-2">
        <h6 class="text-xs font-bold uppercase text-slate-500 tracking-wider">Reported Symptoms</h6>
        <div class="flex flex-wrap gap-1.5">
          ${symptoms && symptoms.length > 0 ? symptoms.map(s => `
            <span class="px-2.5 py-1 bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold rounded-lg">${s}</span>
          `).join('') : '<span class="text-xs text-slate-400">No specific symptom tags flagged</span>'}
        </div>
        ${notes ? `
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 mt-2">
            <strong>Notes:</strong> ${notes}
          </div>
        ` : ''}
      </div>

      <div class="space-y-2">
        <h6 class="text-xs font-bold uppercase text-slate-500 tracking-wider">Attached Prescriptions & Medical Reports</h6>
        ${reports && reports.length > 0 ? reports.map(r => `
          <div class="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs">
            <div class="flex items-center gap-2">
              <i data-lucide="file-text" class="w-4 h-4 text-brand-600"></i>
              <span class="font-bold text-slate-800">${r.name}</span>
              <span class="text-slate-400">(${r.size})</span>
            </div>
            <span class="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-md">Verified</span>
          </div>
        `).join('') : '<span class="text-xs text-slate-400">No documents attached</span>'}
      </div>
    `;

    modal.classList.remove('hidden');
    if (window.lucide) window.lucide.createIcons();
  }

  // Toast System
  function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-msg';

    let icon = 'info';
    if (type === 'success') icon = 'check-circle';
    if (type === 'warning') icon = 'alert-triangle';
    if (type === 'error') icon = 'x-circle';

    toast.innerHTML = `
      <i data-lucide="${icon}" class="w-5 h-5 shrink-0 ${type === 'success' ? 'text-emerald-400' : (type === 'warning' ? 'text-amber-400' : 'text-blue-400')}"></i>
      <span class="flex-1">${message}</span>
    `;

    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('hidden');
  }

  function switchTab(tabId) {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(b => {
      if (b.getAttribute('data-tab') === tabId) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.add('hidden');
    });

    const activeContent = document.getElementById(`tab-${tabId}`);
    if (activeContent) activeContent.classList.remove('hidden');
    activeTab = tabId;

    renderApp();
  }

  // ==========================================================================
  // 9. EVENT LISTENERS SETUP
  // ==========================================================================
  function setupEventListeners() {
    // Tab switching
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        switchTab(tabId);
      });
    });

    // Clinic Selector
    const clinicSelector = document.getElementById('clinicSelector');
    if (clinicSelector) {
      clinicSelector.addEventListener('change', (e) => {
        currentDoctorId = e.target.value;
        renderApp();
        showToast(`Switched view to ${getCurrentDoctor().name} (${getCurrentDoctor().clinicName})`);
      });
    }

    // Search bar input & button
    const searchInput = document.getElementById('doctorSearchInput');
    const searchBtn = document.getElementById('doctorSearchBtn');
    const locSelect = document.getElementById('searchLocationSelect');
    const sortSelect = document.getElementById('doctorSortSelect');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderDoctorDirectory();
      });
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          searchQuery = searchInput.value;
          renderDoctorDirectory();
        }
      });
    }

    if (searchBtn && searchInput) {
      searchBtn.addEventListener('click', () => {
        searchQuery = searchInput.value;
        renderDoctorDirectory();
      });
    }

    if (locSelect) {
      locSelect.addEventListener('change', (e) => {
        selectedLocationFilter = e.target.value;
        renderDoctorDirectory();
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        currentSortBy = e.target.value;
        renderDoctorDirectory();
      });
    }

    // Elderly / High Readability Mode Toggle
    const elderlyBtn = document.getElementById('elderlyModeBtn');
    const elderlyText = document.getElementById('elderlyModeText');
    if (elderlyBtn) {
      elderlyBtn.addEventListener('click', () => {
        isElderlyMode = !isElderlyMode;
        document.body.classList.toggle('elderly-mode', isElderlyMode);
        if (elderlyText) {
          elderlyText.textContent = isElderlyMode ? 'Senior View: ACTIVE' : 'Senior View: Normal';
        }
        showToast(isElderlyMode ? 'Senior citizen high-readability mode enabled' : 'Standard view restored');
      });
    }

    // Audio chime toggle
    const audioBtn = document.getElementById('audioToggleBtn');
    const audioIcon = document.getElementById('audioIcon');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        isAudioEnabled = !isAudioEnabled;
        if (audioIcon) {
          audioIcon.setAttribute('data-lucide', isAudioEnabled ? 'volume-2' : 'volume-x');
          audioIcon.className = `w-3.5 h-3.5 ${isAudioEnabled ? 'text-emerald-400' : 'text-slate-400'}`;
        }
        if (window.lucide) window.lucide.createIcons();
        if (isAudioEnabled) playHospitalChime();
        showToast(isAudioEnabled ? 'Token announcement chime enabled' : 'Audio muted');
      });
    }

    // TV Kiosk Mode
    const tvBtn = document.getElementById('tvModeBtn');
    const exitTvBtn = document.getElementById('exitTvBtn');
    const tvOverlay = document.getElementById('tvKioskOverlay');
    if (tvBtn && tvOverlay) {
      tvBtn.addEventListener('click', () => {
        tvOverlay.classList.remove('hidden');
        renderTvDisplay();
        if (window.lucide) window.lucide.createIcons();
      });
    }
    if (exitTvBtn && tvOverlay) {
      exitTvBtn.addEventListener('click', () => {
        tvOverlay.classList.add('hidden');
      });
    }

    // Filter Buttons in Queue Table (All, Priority, Waiting)
    const filterBtns = document.querySelectorAll('.queue-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        renderLiveQueueDashboard();
        if (window.lucide) window.lucide.createIcons();
      });
    });

    // Track Token Input
    const trackTokenBtn = document.getElementById('trackTokenBtn');
    const trackTokenInput = document.getElementById('trackTokenInput');
    if (trackTokenBtn && trackTokenInput) {
      trackTokenBtn.addEventListener('click', () => {
        if (trackTokenInput.value) trackToken(trackTokenInput.value);
      });
      trackTokenInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          trackToken(trackTokenInput.value);
        }
      });
    }

    // Book Token Form
    const bookForm = document.getElementById('bookTokenForm');
    if (bookForm) {
      bookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const docSelect = document.getElementById('bookDoctorSelect');
        const assignedDocId = docSelect ? docSelect.value : currentDoctorId;
        const name = document.getElementById('patientNameInput').value;
        const age = document.getElementById('patientAgeInput').value;
        const phone = document.getElementById('patientPhoneInput').value;
        const priority = document.querySelector('input[name="bookingPriority"]:checked')?.value || 'General';

        currentDoctorId = assignedDocId;
        const token = addNewToken(name, age, phone, priority, assignedDocId);
        bookForm.reset();

        trackToken(token.token);
        const trackInput = document.getElementById('trackTokenInput');
        if (trackInput) trackInput.value = token.token;
      });
    }

    // Desk Issue Token Form (Reception Desk)
    const deskForm = document.getElementById('deskIssueTokenForm');
    if (deskForm) {
      deskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('deskPatientName').value;
        const age = document.getElementById('deskPatientAge').value;
        const phone = document.getElementById('deskPatientPhone').value;
        const priority = document.getElementById('deskPatientPriority').value;

        addNewToken(name, age, phone, priority);
        deskForm.reset();
        closeModal('addPatientModal');
      });
    }

    // Call Next Token Button
    const callNextBtn = document.getElementById('callNextBtn');
    if (callNextBtn) {
      callNextBtn.addEventListener('click', callNextToken);
    }

    // Doctor Delay Button
    const delayBtn = document.getElementById('doctorDelayBtn');
    if (delayBtn) {
      delayBtn.addEventListener('click', () => addDoctorDelay(15));
    }

    // Open Walk-in Modal Button
    const openModalBtn = document.getElementById('openNewWalkInModalBtn');
    if (openModalBtn) {
      openModalBtn.addEventListener('click', () => {
        const modal = document.getElementById('addPatientModal');
        if (modal) modal.classList.remove('hidden');
      });
    }

    // Pre-Check Form Submission
    const preCheckForm = document.getElementById('preCheckForm');
    if (preCheckForm) {
      preCheckForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const tokenNum = document.getElementById('preCheckTokenSelect').value;
        const phone = document.getElementById('preCheckPhone').value;
        const notes = document.getElementById('preCheckNotes').value;

        const vitals = {
          bp: document.getElementById('vitalBP').value,
          sugar: document.getElementById('vitalSugar').value,
          temp: document.getElementById('vitalTemp').value,
          pulse: document.getElementById('vitalPulse').value,
          spo2: document.getElementById('vitalSpO2').value
        };

        submitPreCheck(tokenNum, phone, vitals, selectedSymptoms, notes, [...tempUploadedFiles]);
        preCheckForm.reset();
        selectedSymptoms.clear();
        tempUploadedFiles = [];
        renderPreCheckOptions();
      });
    }

    // File Upload for Pre-Check
    const fileInput = document.getElementById('fileUploadInput');
    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        files.forEach(f => {
          tempUploadedFiles.push({
            name: f.name,
            size: `${(f.size / (1024 * 1024)).toFixed(1)} MB`
          });
        });
        renderUploadedFilesList();
      });
    }

    // Auth Form Submission
    const authForm = document.getElementById('authMainForm');
    const authFileInput = document.getElementById('authDpFileInput');

    if (authFileInput) {
      authFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            tempAuthAvatar = event.target.result;
            renderPresetAvatars();
          };
          reader.readAsDataURL(file);
        }
      });
    }

    if (authForm) {
      authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const identifier = document.getElementById('authIdentifierInput').value.trim();
        const rawName = document.getElementById('authNameInput')?.value?.trim();
        const specialtyInput = document.getElementById('authDoctorSpecialty')?.value?.trim();
        const regNumInput = document.getElementById('authDoctorRegNum')?.value?.trim();

        if (authIsSignUp) {
          // SIGN UP
          const displayName = rawName || identifier.split('@')[0];

          if (authModalRole === 'doctor') {
            // Register doctor profile in marketplace
            const newDoc = registerDoctorProfile({
              name: displayName,
              specialty: specialtyInput || 'General Medicine',
              regNumber: regNumInput || 'MCI-' + Math.floor(1000 + Math.random() * 9000),
              clinicName: `${displayName}'s Clinic`,
              address: 'Central Medical District',
              avatar: tempAuthAvatar
            });

            const newAccount = {
              id: 'acc-' + Date.now(),
              role: 'doctor',
              name: newDoc.name,
              identifier: identifier,
              avatar: newDoc.img,
              doctorId: newDoc.id
            };

            accounts.push(newAccount);
            currentUser = {
              isLoggedIn: true,
              role: 'doctor',
              name: newDoc.name,
              identifier: identifier,
              avatar: newDoc.img,
              doctorId: newDoc.id
            };
            currentDoctorId = newDoc.id;

            saveStorage();
            closeModal('authModal');
            authForm.reset();
            renderApp();
            showToast(`${newDoc.name} registered and published in the doctor directory!`, 'success');
          } else {
            // Register patient
            const newAccount = {
              id: 'acc-' + Date.now(),
              role: 'patient',
              name: displayName,
              identifier: identifier,
              avatar: tempAuthAvatar,
              doctorId: null
            };

            accounts.push(newAccount);
            currentUser = {
              isLoggedIn: true,
              role: 'patient',
              name: displayName,
              identifier: identifier,
              avatar: tempAuthAvatar,
              doctorId: null
            };

            saveStorage();
            closeModal('authModal');
            authForm.reset();
            renderApp();
            showToast(`Welcome ${displayName}! Patient account registered.`, 'success');
          }
        } else {
          // LOGIN
          const existingAccount = accounts.find(a => 
            a.identifier.toLowerCase() === identifier.toLowerCase() && 
            a.role === authModalRole
          );

          if (existingAccount) {
            currentUser = {
              isLoggedIn: true,
              role: existingAccount.role,
              name: existingAccount.name,
              identifier: existingAccount.identifier,
              avatar: existingAccount.avatar,
              doctorId: existingAccount.doctorId
            };
            if (existingAccount.doctorId) {
              currentDoctorId = existingAccount.doctorId;
            }
            showToast(`Welcome back, ${currentUser.name}!`, 'success');
          } else {
            // Fallback: if logging in as doctor
            if (authModalRole === 'doctor') {
              const matchedDoc = doctors.find(d => 
                d.name.toLowerCase().includes(identifier.toLowerCase()) || 
                identifier.toLowerCase().includes(d.id.toLowerCase())
              ) || doctors[0];

              currentUser = {
                isLoggedIn: true,
                role: 'doctor',
                name: matchedDoc.name,
                identifier: identifier,
                avatar: matchedDoc.img,
                doctorId: matchedDoc.id
              };
              currentDoctorId = matchedDoc.id;
              showToast(`Logged in as ${matchedDoc.name}!`, 'success');
            } else {
              const name = identifier.split('@')[0];
              currentUser = {
                isLoggedIn: true,
                role: 'patient',
                name: name.charAt(0).toUpperCase() + name.slice(1),
                identifier: identifier,
                avatar: tempAuthAvatar || PRESET_AVATARS[0],
                doctorId: null
              };
              showToast(`Logged in as patient (${currentUser.name})!`, 'success');
            }
          }

          saveStorage();
          closeModal('authModal');
          authForm.reset();
          renderApp();
        }
      });
    }

    // Clinic / Doctor Onboarding Form Submission
    const clinicRegForm = document.getElementById('clinicRegisterForm');
    if (clinicRegForm) {
      clinicRegForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const clinicName = document.getElementById('regClinicName')?.value;
        const doctorName = document.getElementById('regDoctorName')?.value;
        const specialty = document.getElementById('regSpecialty')?.value;
        const address = document.getElementById('regAddress')?.value;

        const newDoc = registerDoctorProfile({
          name: doctorName,
          specialty: specialty,
          regNumber: 'MCI-CLINIC-' + Math.floor(1000 + Math.random() * 9000),
          clinicName: clinicName,
          address: address,
          avatar: PRESET_AVATARS[doctors.length % PRESET_AVATARS.length]
        });

        // Add doctor account
        const newAccount = {
          id: 'acc-' + Date.now(),
          role: 'doctor',
          name: newDoc.name,
          identifier: (doctorName || 'doctor').toLowerCase().replace(/[^a-z0-9]/g, '') + '@clinic.com',
          avatar: newDoc.img,
          doctorId: newDoc.id
        };
        accounts.push(newAccount);

        currentDoctorId = newDoc.id;
        currentUser = {
          isLoggedIn: true,
          role: 'doctor',
          name: newDoc.name,
          identifier: newAccount.identifier,
          avatar: newDoc.img,
          doctorId: newDoc.id
        };

        saveStorage();
        closeModal('clinicRegistrationModal');
        clinicRegForm.reset();
        renderApp();
        showToast(`${newDoc.name} & ${clinicName} successfully registered and visible in search!`, 'success');
      });
    }

    // Live clock ticks
    setInterval(updateClocks, 1000);
    updateClocks();
  }

  function updateClocks() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString();

    const currentClock = document.getElementById('currentClock');
    const lastUpdatedClock = document.getElementById('lastUpdatedClock');
    const tvClock = document.getElementById('tvClock');

    if (currentClock) currentClock.textContent = timeStr;
    if (lastUpdatedClock) lastUpdatedClock.textContent = timeStr;
    if (tvClock) tvClock.textContent = timeStr;
  }

  // ==========================================================================
  // 10. PUBLIC EXPOSURES
  // ==========================================================================
  window.ParchiTrack = {
    switchDoctor: function (docId) {
      currentDoctorId = docId;
      renderApp();
      showToast(`Connected to ${getCurrentDoctor().name} (${getCurrentDoctor().clinicName})`);
    },
    switchTab: switchTab,
    dismissDelayAlert: dismissDelayAlert,
    openVitalsModal: openVitalsModal,
    setTokenPriority: setTokenPriority,
    callSpecificToken: callSpecificToken,
    closeModal: closeModal,
    openAuthModal: openAuthModal,
    setAuthRole: setAuthRole,
    toggleAuthMode: toggleAuthMode,
    selectPresetAvatar: selectPresetAvatar,
    loginQuickDemo: loginQuickDemo,
    logoutUser: logoutUser,
    openDoctorPortfolio: openDoctorPortfolio,
    bookTokenWithDoctor: bookTokenWithDoctor,
    toggleWriteReviewBox: toggleWriteReviewBox,
    setReviewRating: function (rating) {
      pendingReviewRating = rating;
      renderStarPicker();
    },
    submitPatientReview: submitPatientReview,
    filterBySpecialty: function (specialtyId) {
      selectedSpecialtyFilter = specialtyId;
      renderSpecialtyPills();
      renderDoctorDirectory();
    },
    clearSearchFilters: function () {
      searchQuery = '';
      selectedSpecialtyFilter = 'all';
      selectedLocationFilter = 'all';
      const input = document.getElementById('doctorSearchInput');
      if (input) input.value = '';
      const loc = document.getElementById('searchLocationSelect');
      if (loc) loc.value = 'all';
      renderSpecialtyPills();
      renderDoctorDirectory();
    },
    toggleSymptom: function (symptomName) {
      if (selectedSymptoms.has(symptomName)) {
        selectedSymptoms.delete(symptomName);
      } else {
        selectedSymptoms.add(symptomName);
      }
      renderPreCheckOptions();
    },
    removeUploadedFile: function (index) {
      tempUploadedFiles.splice(index, 1);
      renderUploadedFilesList();
    },
    openClinicRegistrationModal: function (plan = 'Pro') {
      const modal = document.getElementById('clinicRegistrationModal');
      const select = document.getElementById('regPlanSelect');
      if (select) select.value = plan;
      if (modal) modal.classList.remove('hidden');
    }
  };

  // One-time schema migration: clear any stale v1 keys from old app versions
  function migrateSchema() {
    const SCHEMA_VER_KEY = 'parchitrack_schema_v';
    const CURRENT_VER = '2';
    const lastVer = localStorage.getItem(SCHEMA_VER_KEY);
    if (lastVer !== CURRENT_VER) {
      // Clear only old v1 keys — v2 keys are retained
      ['parchitrack_clinics', 'parchitrack_queue', 'parchitrack_user'].forEach(k => {
        localStorage.removeItem(k);
      });
      localStorage.setItem(SCHEMA_VER_KEY, CURRENT_VER);
      console.info('[ParchiTrack] Schema migrated to v2. Old keys cleared.');
    }
  }

  // Expose a manual reset utility on the console for debugging
  window.ParchiTrack.resetStorage = function () {
    ['parchitrack_doctors_v2','parchitrack_queues_v2','parchitrack_accounts_v2','parchitrack_user_v2','parchitrack_schema_v'].forEach(k => localStorage.removeItem(k));
    console.warn('[ParchiTrack] All storage cleared. Reloading…');
    location.reload();
  };

  // Bootstrap on ready
  document.addEventListener('DOMContentLoaded', () => {
    migrateSchema();
    initStorage();
    setupEventListeners();
    renderApp();
  });

})();
