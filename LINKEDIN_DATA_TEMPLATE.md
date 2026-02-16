# Template untuk Extract Data LinkedIn

Gunakan template ini untuk memudahkan copy-paste data dari LinkedIn PDF export ke `lib/data.ts`.

---

## 📝 Profile Information

**Dari LinkedIn "Intro" section:**

```
Nama Lengkap: _________________
Tagline/Headline: _________________
Lokasi: _________________
Email: _________________
LinkedIn URL: _________________
GitHub URL: _________________
Website (jika ada): _________________
```

**Bio/About (dari "About" section):**
```
Copy-paste bio Anda di sini (3-5 paragraf)




```

---

## 💼 Work Experience

**Dari LinkedIn "Experience" section** (list dari yang paling baru):

### Pengalaman 1
```
Company: _________________
Role/Title: _________________
Employment Type: Full-time / Part-time / Contract / Freelance / Internship
Location: _________________
Start Date: YYYY-MM (contoh: 2023-01)
End Date: YYYY-MM atau "Present"

Job Description (1-2 kalimat):


Key Achievements (3-5 bullet points):
- 
- 
- 
- 

Technologies Used:
- 
- 
- 
```

### Pengalaman 2
```
Company: _________________
Role/Title: _________________
Employment Type: _________________
Location: _________________
Start Date: _________________
End Date: _________________

Job Description:


Key Achievements:
- 
- 
- 

Technologies Used:
- 
- 
```

### Pengalaman 3
```
Company: _________________
Role/Title: _________________
Employment Type: _________________
Location: _________________
Start Date: _________________
End Date: _________________

Job Description:


Key Achievements:
- 
- 
- 

Technologies Used:
- 
- 
```

---

## 🚀 Projects (6 Projects)

**Dari LinkedIn "Projects" section atau portfolio:**

### Project 1 (Featured)
```
Title: _________________
Category: Web Application / Mobile App / SaaS / E-commerce / API / Other
Short Description (1 sentence):

Long Description (2-3 sentences - optional):


Technologies Used:
- 
- 
- 

Links:
Demo URL: _________________
GitHub URL: _________________
Case Study URL: _________________

Date Completed: YYYY-MM

Featured: Yes / No

Image Filename: project1.jpg (simpan di public/projects/)
```

### Project 2 (Featured)
```
Title: _________________
Category: _________________
Short Description:

Technologies:
- 
- 

Links:
Demo: _________________
GitHub: _________________

Date: _________________
Featured: Yes
Image: project2.jpg
```

### Project 3 (Featured)
```
Title: _________________
Category: _________________
Short Description:

Technologies:
- 
- 

Links:
Demo: _________________
GitHub: _________________

Date: _________________
Featured: Yes
Image: project3.jpg
```

### Project 4
```
Title: _________________
Category: _________________
Short Description:

Technologies:
- 
- 

Links:
Demo: _________________
GitHub: _________________

Date: _________________
Featured: No
Image: project4.jpg
```

### Project 5
```
Title: _________________
Category: _________________
Short Description:

Technologies:
- 
- 

Links:
Demo: _________________
GitHub: _________________

Date: _________________
Featured: No
Image: project5.jpg
```

### Project 6
```
Title: _________________
Category: _________________
Short Description:

Technologies:
- 
- 

Links:
Demo: _________________
GitHub: _________________

Date: _________________
Featured: No
Image: project6.jpg
```

---

## 🛠 Skills

**Dari LinkedIn "Skills" section** (group by category):

### Frontend
```
List skills dengan proficiency (1-100):
- React: 90
- Next.js: 85
- TypeScript: 
- Vue.js: 
- Tailwind CSS: 
- HTML/CSS: 
- JavaScript: 
```

### Backend
```
- Node.js: 
- Express.js: 
- Python: 
- FastAPI: 
- GraphQL: 
- REST APIs: 
```

### Database
```
- PostgreSQL: 
- MongoDB: 
- MySQL: 
- Redis: 
- Firebase: 
```

### DevOps
```
- Docker: 
- AWS: 
- Vercel: 
- CI/CD: 
- Git: 
- Kubernetes: 
```

### Tools
```
- VS Code: 
- Figma: 
- Postman: 
- Jira: 
- Slack: 
```

---

## 🎓 Education

**Dari LinkedIn "Education" section:**

```
Institution: _________________
Degree: Bachelor / Master / PhD / Diploma
Field of Study: _________________
Start Date: YYYY-MM
End Date: YYYY-MM
GPA (optional): ___ / 4.0

Description (optional):


```

---

## 🏆 Certifications

**Dari LinkedIn "Licenses & certifications" section:**

### Certification 1
```
Name: _________________
Issuing Organization: _________________
Issue Date: YYYY-MM
Credential ID (if any): _________________
Credential URL (if any): _________________
```

### Certification 2
```
Name: _________________
Issuing Organization: _________________
Issue Date: _________________
Credential ID: _________________
Credential URL: _________________
```

---

## 📸 Image Checklist

Siapkan images berikut:

- [ ] **Profile Photo** (optional): `public/profile.jpg` (jika mau di About section)
- [ ] **Project 1 Screenshot**: `public/projects/project1.jpg` (1920×1080)
- [ ] **Project 2 Screenshot**: `public/projects/project2.jpg`
- [ ] **Project 3 Screenshot**: `public/projects/project3.jpg`
- [ ] **Project 4 Screenshot**: `public/projects/project4.jpg`
- [ ] **Project 5 Screenshot**: `public/projects/project5.jpg`
- [ ] **Project 6 Screenshot**: `public/projects/project6.jpg`
- [ ] **OG Image** (for social sharing): `public/og-image.jpg` (1200×630)

**Tips Image:**
- Format: JPG atau WebP
- Size: Max 200KB per image (optimize di squoosh.app)
- Resolution: 1920×1080 untuk project screenshots
- Take screenshots di desktop/laptop (bukan mobile)

---

## 🔄 Cara Update Data ke Website

Setelah fill template di atas:

1. **Buka file**: `d:\Project\oskn-profile\lib\data.ts`

2. **Update profileData:**
   ```typescript
   export const profileData: Profile = {
     name: "Nama Lengkap Anda",
     tagline: "Tagline dari LinkedIn",
     bio: "Bio lengkap...",
     email: "email@anda.com",
     location: "Jakarta, Indonesia",
     socialLinks: {
       linkedin: "https://linkedin.com/in/username",
       github: "https://github.com/username",
       // ... dst
     },
   };
   ```

3. **Update experienceData** (ganti semua 3 entries)

4. **Update projectsData** (ganti semua 6 entries)

5. **Update skillsData** (adjust proficiency numbers)

6. **Update educationData**

7. **Update certificationsData**

8. **Simpan file** (Ctrl+S)

9. **Check browser** → refresh http://localhost:3000 → data baru muncul!

---

## ✅ Validation Checklist

Setelah update data:

- [ ] All text readable (no lorem ipsum)
- [ ] Email & social links correct
- [ ] All dates in YYYY-MM format
- [ ] Project links work (demo & GitHub)
- [ ] Technologies spelled correctly
- [ ] No typos or grammar errors
- [ ] Images uploaded to `/public/projects/`
- [ ] Image paths in data.ts match actual filenames

---

Selamat mengisi data! Kalau ada pertanyaan, refer to existing sample data di `lib/data.ts` sebagai reference format. 🎉
