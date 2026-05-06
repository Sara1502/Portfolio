
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = 'tel:${profile.phone}'

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = 'mailto:${profile.email}'
}

function updateCargo(profileData) {
    const job = document.getElementById('profile.job')
    job.innerHTML = profileData.job.map(job => `
        <a href="${job.url}">${job.cargo}</a>    
    `).join('')
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => ` 
        <li>
            <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">
        </li>`
    ).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `
        <li>${language}</li>
        `).join('')
}

function updateCourses(profileData) {
    const courses = document.getElementById('profile.courses')
    courses.innerHTML = profileData.education.courses.map(couse => `
            <li>
                <img src="${couse.insignia}" alt="${courses.name}" title="${courses.name}"> 
            </li>
        `).join('')
}

function updateDegree(profileData) {
    const degrees = document.getElementById('profile.degree')
    degrees.innerHTML = profileData.education.degree.map(degree => `
        <li>
            <h3>${degree.name}</h3>
            <p>${degree.localDate}</p>
        </li>
    `).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `).join('')
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => `
        <li>
            <h3 class="title">${experience.name}</h3>
            <p class="periodo">${experience.period}</p>
            <p>${experience.description}</p>
        </li>    
    `).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateCargo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
    updateCourses(profileData)
    updateDegree(profileData)
})()