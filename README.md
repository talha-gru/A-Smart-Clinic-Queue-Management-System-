# ParchiTrack - Multi-Clinic Healthcare Marketplace & Smart Queue System

**ParchiTrack** is an enterprise-grade, clean, and accessible healthcare marketplace and queue management platform inspired by modern pharmaceutical and telehealth layouts. It combines a verified doctor directory with real-time patient queue tracking, disease search, digital pre-check triage, and smart travel assistance.

---

## 🌟 Upgraded Core Features

### 1. Multi-Role Authentication & Profile Picture (DP) System
- **Patient & Doctor Roles:** Clean auth modal allowing users to log in or register either **As a Patient** or **As a Doctor**.
- **Profile Picture (DP) Upload:**
  - File picker converting patient photos to local Base64 avatars.
  - Six medical/patient preset avatars for immediate 1-click selection.
  - Avatars displayed in the header account pill, queue roster, token cards, and pre-check logs.
- **One-Click Demo Switcher:** Instant test logins for **Patient (Rahul Sharma)** and **Doctor (Dr. Rajesh Verma)**.

### 2. Multi-Doctor & Multi-Clinic Directory
- **Six Verified Medical Specialists Across Multiple Clinics:**
  1. **Dr. Sarah Khan, MD:** CarePoint Family Practice (General Medicine & Diabetology)
  2. **Dr. Rajesh Verma, DM:** Apex Health Polyclinic & Diagnostics (Cardiology & Heart Care)
  3. **Dr. Ananya Sen, MD:** Sunrise Pediatrics & Child Wellness (Pediatrics & Infant Care)
  4. **Dr. Vikram Malhotra, MS:** Metro Orthopedic & Spine Center (Orthopedics & Joint Preservation)
  5. **Dr. Priya Nambiar, MD:** DermaClear Skin & Hair Institute (Dermatology & Hair Care)
  6. **Dr. Amit Deshmukh, MS:** CareWell ENT & Sinus Clinic (ENT & Endoscopic Sinus)
- **Directory Information:** Qualifications, clinic location, consultation fees, experience, live queue tokens, and distance from patient.

### 3. Disease, Symptom & Specialty Search
- **Intelligent Search Bar:** Type symptoms or conditions (e.g., *"Chest Pain"*, *"Acne"*, *"Knee Pain"*, *"Fever"*, *"Sinus"*, *"Diabetes"*) or doctor/clinic names to filter matching practitioners instantly.
- **Quick Specialty Pills:** 1-click filters for General Medicine, Cardiology, Pediatrics, Dermatology, Orthopedics, and ENT.
- **Sorting Options:** Sort directory by **Recommended / Highest Rated**, **Nearest Distance**, or **Shortest Chamber Wait**.

### 4. Doctor Portfolios & Verified Patient Reviews
- **Dedicated Doctor Portfolio Modal:**
  - High-res doctor portrait, credentials, and full clinical bio.
  - List of conditions and diseases treated.
  - Clinic address, distance, working hours, and current live chamber wait time.
  - Star ratings breakdown and verified patient reviews.
  - **Interactive Review Submission:** Patients can choose star ratings (1 to 5 stars), submit written feedback, and see ratings recalculate live.

### 5. Patient-to-Clinic Location & Route Assistant
- **Distance & Travel Helper:**
  - Calculates commute duration for Car/Cab, Public Transit, and Walking.
  - **Smart Travel Buffer Assistant:** Automatically compares estimated queue wait time against travel time:
    $$\text{Departure Buffer} = \text{Queue Wait Time} - \text{Commute Time}$$
    Advises patients when to leave home so they arrive just in time for their token.
  - Stylized interactive route map widget with direct links to Google Maps directions.

### 6. Enhanced Live Queue Dashboard
- **Prominent Serving Hero Card:** Real-time token number (e.g., `#18`), consulting doctor, chamber door, and elapsed duration.
- **Transparent Priority Dispatch Engine:**
  - 🚨 **Emergency Priority:** Instant jump to Slot #1 (Next in Line).
  - 🧓 **Senior Citizen (60+ yrs):** Priority interleaving ahead of general walk-ins.
  - 👤 **General Walk-in:** Standard FIFO order.
- **Patient Profile Pictures:** Live queue roster shows patient avatars, priority badges, and pre-check status.
- **Audio Chime Synthesizer:** Two-tone synthetic hospital chime (Web Audio API) triggered upon calling next token.
- **Doctor Delay Alerts:** Live sticky notification banner across views when doctor logs a delay, auto-recalibrating all pending wait times.
- **Waiting Room TV Kiosk Mode:** Fullscreen display for waiting room wall screens.

---

## 🚀 How to Run the Application

1. Double-click `index.html` to open it in Google Chrome, Microsoft Edge, Mozilla Firefox, or any modern web browser.
2. Alternatively, serve via any local web server:
   ```bash
   start index.html
   ```

---

## 📁 Updated File Architecture
```
A Smart Clinic Queue Management System/
│
├── index.html       # Complete HTML5 structure, navigation, directory, modals & TV kiosk
├── css/styles.css   # Pharmaceutical theme, category pills, doctor cards, route styles & accessibility
├── js/app.js        # Multi-doctor marketplace, auth, search engine, reviews, travel buffer & queue engine
└── README.md        # Complete system documentation
```
