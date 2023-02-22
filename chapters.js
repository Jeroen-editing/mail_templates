const getById = (id) => (document.getElementById(id));

class Chapter {
    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.pop_up = this.pop_up;

        this.getTitle = () => {return this.title;}
        this.getContent = () => {return this.content;}
        this.getPopup = () => {return this.pop_up;}
    }
}

let titleClass = `<div class="title_box"><h3 class="chapters_title">`;
let closeButton = ` <section class="close_button" id="close">
                        <button>
                            <img src="assets/cv/close_white.png" class="close_x">
                        </button>
                    </section>`;
let contentClass = `<div class="chapter_content">`;
let popupClass = `<section class="popup_window">`;

let pop_up_element = getById('pop_up');
let info_element = getById('info_section');


const createPersonalInfo = () => {
    const personalInfo = new Chapter();

    const aboutMe_content = `
        <article class="aboutme_box">
            <div class="chapter">
                <header class="section_title">
                    <h3 class="aboutme_title">
                        About me
                    </h3>
                </header>
                <section class="section aboutme_section">
                    <section class="content aboutme">
                        <div class="text_box">
                            <p class="text_part">
                                In 2019 I started studying web development, because I wanted a change in my career. 
                                To get the most out of my study period, I followed a fulltime course and evening 
                                school at the same time. I even learned double as much on my own online. And because 
                                my interest in web development is still growing, I keep learning and improving myself.
                            </p>
                            <p class="alinea"></p>
                            <p class="text_part">
                                Although I’m already a bit older as the average junior developer, I’m certain some 
                                employers can value an adult attitude and reliability. This is a second chance for 
                                me after all, so I will never take that for granted. And that only motivates me 
                                uttermost, to keep studying and working nearly every 
                            </p>
                        </div>
                    </section>
                </section>
            </div>
        </article>`;

    const contact_content = `
    <article class="contact_box">
        <div class="chapter">
            <header class="section_title">
                <h3 class="contact_title">
                    Contact Info
                </h3>
            </header>
            <section class="section contact_section">
                <div class="duo_flex">
                    <section class="content mail">
                        <h4 class="sub_title">
                            Write me an email...
                        </h4>
                        <div class="mail_button btn">
                            <button>
                                <a href="mailto:jdv.editing@gmail.com">jdv.editing@...</a>
                            </button>
                        </div>
                    </section>
                    <section class="content linkedin">
                        <h4 class="sub_title">
                            Go to my LinkedIn profile...
                        </h4>
                        <div class="linkedIn_button btn">
                            <button>
                                <a href="https://www.linkedin.com/in/jeroen-de-vos-39258718b/" target="_blank">https://www.linkedin...</a>
                            </button>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    </article>`;

    const portfolio_content = `
        <article class="portfolio_box">
            <div class="chapter">
                <header class="section_title">
                    <h3 class="aboutme_title">
                        Portfolio
                    </h3>
                </header>
                <section class="section portfolio_section">
                    <div class="duo_flex">
                        <section class="content portfolio">
                            <h4 class="sub_title">
                                Open my portfolio...
                            </h4>
                            <div class="portfolio_button btn">
                                <button>
                                    <a href="https://jeroen-editing.github.io/Portfolio/" target="_blank">https://www....Portfolio</a>
                                </button>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </article>`;

    const freeTime_content = `
        <article class="hobbies_box">
            <div class="chapter">
                <header class="section_title">
                    <h3 class="hobbies_title">
                        Free time
                    </h3>
                </header>
                <section class="section hobbies_section">
                    <section class="content hobbies">
                        <div class="text_box">
                            <ul class="hobby_list">
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">Making films, music (DJ) and graphic art.</p>
                                </li>
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">Reading graphic- and fiction-novels.</p>
                                </li>
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">Online strategy games (often as team-leader).</p>
                                </li>
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">Day trips mountain-biking, cyclocross and hiking.</p>
                                </li>
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">Backpacking holidays and citytrips.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </section>
            </div>
        </article>`;

    const address_content = `
        <article class="address_box">
            <div class="chapter">
                <header class="section_title">
                    <h3 class="contact_title">
                        Address
                    </h3>
                </header>
                <section class="section address_section">
                    <div class="duo_flex">
                        <section class="content address">
                            <div class="text_box top_box">
                                <p class="text_part street">Volkstraat 1,</p>
                                <p class="text_part town">2000, Antwerp,</p>
                            </div>
                            <div class="text_box">
                                <p class="text_part">Antwerp, Belgium</p>
                            </div>
                        </section>
                    </div>
                    <div class="duo_flex">
                        <section class="content phones">
                            <div class="gsm btn">
                                <button>
                                    <a href="tel:+32485577391" class="tel_link">smartphone</a>
                                </button>
                            </div>
                            <div class="home btn">
                                <button>
                                    <a href="tel:+3234306079" class="tel_link">homephone</a>
                                </button>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </article>`;

    personalInfo.title = `${titleClass}Personal Info</h3>${closeButton}</div>`;
    personalInfo.content = `${contentClass}${aboutMe_content}${contact_content}${portfolio_content}${freeTime_content}${address_content}</div>`;
    personalInfo.pop_up = `${popupClass}${personalInfo.getTitle()}${personalInfo.getContent()}</section>`;

    pop_up_element.innerHTML = `${personalInfo.getPopup()}`;

    const close = getById('close');
    close.addEventListener('click', () => {
        pop_up_element.classList.replace("box_visible", "box_hidden");
        info_element.classList.replace("box_hidden", "box_visible");
    });
};

const openPersonalInfo  = getById('getInfo');
const info_arrow = getById('info_arrow');

openPersonalInfo.addEventListener('click', () => {
    info_element.classList.replace("box_visible", "box_hidden");
    pop_up_element.classList.replace("box_hidden", "box_visible");
    createPersonalInfo();
});
openPersonalInfo.addEventListener('mouseover', () => {
    info_arrow.src = 'assets/cv/arrow_right_white.png';
});
openPersonalInfo.addEventListener('mouseout', () => {
    info_arrow.src = 'assets/cv/arrow_right.png';
});

const createSkills = () => {
    const skills = new Chapter();

    const softSkills_content = `
        <article class="softSkills_box">
            <div class="chapter">
                <header class="section_title">
                    <h3 class="softSkills_title">
                        Soft skills
                    </h3>
                </header>
                <section class="section softskills_section ">
                    <section class="content softskills">
                        <div class="text_box">
                            <ul class="skills_list">
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">Experience at working in a multidisciplinary team, with the Agile method and using SCRUM.</p>
                                </li>
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">Used to make evaluations and to report on the progress and/or difficulties.</p>
                                </li>
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">Experienced in working independently on bigger projects with different aspects and in 
                                    a diversity of responsibilities.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </section>
            </div>
        </article>`;

    const developSkills_content = `
        <article class="skills_box">
            <div class="chapter">
                <header class="section_title">
                    <h3 class="skills_title">
                        Developing skills
                    </h3>
                </header>
                <section class="section skills_section">
                    <section class="content web">
                        <h4 class="sub_title">
                            Front end
                        </h4>
                        <div class="text_box">
                            <ul class="skills_list">
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">Html, CSS, Sass and Bootstrap.</p>
                                </li>
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">JavaScript, Vue JS, React, Redux, jQuery and NodeJS.</p>
                                </li>
                            </ul>
                        </div>
                        <h4 class="sub_title">
                            Back end
                        </h4>
                        <div class="text_box backend_text">
                            <ul class="skills_list">
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">Basics of PHP (with Symfony).</p>
                                </li>
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">Basics of SQL.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </section>
            </div>
        </article>`;

    const pcSkills_content = `
        <article class="skills_box">
            <div class="chapter">
                <header class="section_title">
                    <h3 class="skills_title">
                        Computer skills
                    </h3>
                </header>
                <section class="section skills_section">
                    <section class="content systems">
                        <h4 class="sub_title">
                            Operating systems
                        </h4>
                        <div class="text_box">
                            <p class="text_part">OS-X, Linux (Ubuntu) and Windows.</p>
                        </div>
                    </section>
                    <section class="content design">
                        <h4 class="sub_title">
                            Programs
                        </h4>
                        <div class="text_box design_text">
                            <ul class="skills_list">
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">Adobe Creative Suite (Photoshop, Illustrator, After Effects, ...) and Gimp.</p>
                                </li>
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">Final Cut Pro X, Motion, Logic Pro X, ...</p>
                                </li>
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">FileMaker 16 & 19 (Basics).</p>
                                </li>
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">Access, Excel, Word, Power Point and similar programs for OS-X and Linux.</p>
                                </li>
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">Firefox, Chrome, Opera, Opera GX, Vivaldi, Brave and Safari 
                                    (+ the developers tools in all of them).</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </section>
            </div>
        </article>`;

    const languages_content = `
        <article class="languages_box">
            <div class="chapter">
                <header class="section_title">
                    <h3 class="languages_title">
                        Languages
                    </h3>
                </header>
                <section class="section languages_section ">
                    <section class="content languages_section">
                        <table class="languages_table">
                            <thead>
                                <tr>
                                    <th><p class="text_part">Dutch</p></th>
                                    <th class="middle"><p class="text_part">English</p></th>
                                    <th><p class="text_part">French</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p class="text_part">Good</p></td>
                                    <td class="middle"><p class="text_part">Good</p></td>
                                    <td><p class="text_part">Basics</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </section>
            </div>
        </article>`;

    skills.title =  `${titleClass}Skills</h3>${closeButton}</div>`;
    skills.content = `${contentClass}${softSkills_content}${developSkills_content}${pcSkills_content}${languages_content}</div>`;
    skills.pop_up = `${ popupClass}${skills.getTitle()}${skills.getContent()}</section>`;

    pop_up_element.innerHTML = `${skills.getPopup()}`;

    const close = getById('close');
    close.addEventListener('click', () => {
        pop_up_element.classList.replace("box_visible", "box_hidden");
        info_element.classList.replace("box_hidden", "box_visible");
    });
};

const openSkills  = getById('getSkills');
const skills_arrow = getById('skills_arrow');

openSkills.addEventListener('click', () =>  {
    info_element.classList.replace("box_visible", "box_hidden");
    pop_up_element.classList.replace("box_hidden", "box_visible");
    createSkills();
});
openSkills.addEventListener('mouseover', () => {
    skills_arrow.src = 'assets/cv/arrow_right_white.png';
});
openSkills.addEventListener('mouseout', () => {
    skills_arrow.src = 'assets/cv/arrow_right.png';
});


const createEducation = () => {
    const schools = new Chapter();

    const webSchools_content = `
        <article class="webSchool_box">
            <div class="chapter">
                <header class="section_title">
                    <h3 class="school_title">
                        Web developing
                    </h3>
                </header>
                <section class="section courses_section">
                    <section class="content online">
                        <div class="sub_title_box">
                            <h4 class="sub_title">
                                Dec. 2022 - ...
                            </h4>
                            <h5 class="school_name">Online courses</h5>
                        </div>
                        <div class="text_box">
                            <p class="text_part">Java.</p>
                            <p class="text_part">Mainly Codegym and Codecademy.</p>
                        </div>
                    </section>
                    <section class="content online">
                        <div class="sub_title_box">
                            <h4 class="sub_title">
                                2021 - 2022
                            </h4>
                            <h5 class="school_name">Online courses</h5>
                        </div>
                        <div class="text_box">
                            <p class="text_part">JavaScript, Vue JS, React, Redux, jQuery and NodeJS.</p>
                            <p class="text_part">Mainly Codecademy and freeCodeCamp.</p>
                        </div>
                    </section>
                    <section class="content becode">
                        <div class="sub_title_box">
                            <h4 class="sub_title">
                                2019 - 2021
                            </h4>
                            <h5 class="school_name">Becode Antwerp</h5>
                        </div>
                        <div class="text_box">
                            <p class="text_part">Html, CSS, Bootstrap, Sass, JavaScript, MVC, PHP, SQL and Symfony.</p>
                            <p class="text_part">Intensive practical course.</p>
                        </div>
                    </section>
                    <section class="content encora">
                        <div class="sub_title_box">
                            <h4 class="sub_title">
                                2018 - 2020
                            </h4>
                            <h5 class="school_name">ENCORA Berchem</h5>
                        </div>
                        <div class="text_box">
                            <p class="text_part">JavaScript, SQL and PHP.</p>
                            <p class="text_part">Evening classes.</p>
                        </div>
                    </section>
                    <section class="content online">
                        <div class="sub_title_box">
                            <h4 class="sub_title">
                                2018 - 2021
                            </h4>
                            <h5 class="school_name">Online courses</h5>
                        </div>
                        <div class="text_box">
                            <p class="text_part">Html, CSS, Sass, JavaScript.</p>
                            <p class="text_part">Mainly TheOdinProject, Codecademy and freeCodeCamp.</p>
                        </div>
                    </section>
                    <section class="content science">
                        <div class="sub_title_box">
                            <h4 class="sub_title">
                                2016 - 2018
                            </h4>
                            <h5 class="school_name">Online courses</h5>
                        </div>
                        <div class="text_box">
                            <p class="text_part">Data analytics and programming logic.</p>
                            <p class="text_part">V.D.A.B. online courses.</p>
                        </div>
                    </section>
                </section>
            </div>
        </article>`;

    const artSchools_content = `
        <article class="artSchool_box">
            <div class="chapter">
                <header class="section_title">
                    <h3 class="school_title">
                        Earlier diplomas
                    </h3>
                </header>
                <section class="section courses_section">
                    <section class="content science">
                        <div class="sub_title_box">
                            <h4 class="sub_title">
                                2003 - 2009
                            </h4>
                            <h5 class="school_name">Royal Academy of Fine Arts - Antwerp</h5>
                        </div>
                        <div class="text_box">
                            <p class="text_part">Film- and Videoart.</p>
                        </div>
                    </section>
                    <section class="content science">
                        <div class="sub_title_box">
                            <h4 class="sub_title">
                                1989 - 1996
                            </h4>
                            <h5 class="school_name">Dè Kusthumaniora - Antwerp</h5>
                        </div>
                        <div class="text_box">
                            <p class="text_part">Secondary school - Architecturale vorming.</p>
                        </div>
                    </section>
                </section>
            </div>
        </article>`;

    schools.title = `${titleClass}Education</h3>${closeButton}</div>`;
    schools.content = `${contentClass}${webSchools_content}${artSchools_content}</div>`;
    schools.pop_up = `${popupClass}${schools.getTitle()}${schools.getContent()}</section>`;

    pop_up_element.innerHTML = `${schools.getPopup()}`;

    const close = getById('close');
    close.addEventListener('click', () => {
        pop_up_element.classList.replace("box_visible", "box_hidden");
        info_element.classList.replace("box_hidden", "box_visible");
    });
};

const openEducation = getById('getEducation');
const school_arrow = getById('school_arrow');

openEducation.addEventListener('click', () => {
    info_element.classList.replace("box_visible", "box_hidden");
    pop_up_element.classList.replace("box_hidden", "box_visible");
    createEducation();
});
openEducation.addEventListener('mouseover', () => {
    school_arrow.src = 'assets/cv/arrow_right_white.png';
});
openEducation.addEventListener('mouseout', () => {
    school_arrow.src = 'assets/cv/arrow_right.png';
});


const createExperiences = () => {
    const work = new Chapter();

    const work_content = `
        <article class="work_box">
            <div class="chapter">
                <header class="section_title">
                    <h3 class="work_title">
                        Related work experiences
                    </h3>
                </header>
                <section class="section work_section">
                    <section class="content woonpunt">
                        <div class="sub_title_box">
                            <h4 class="sub_title">
                                2010 - 2016
                            </h4>
                            <h5 class="work_name">District supervisor and technician.</h5>
                        </div>
                        <div class="text_box">
                            <p class="text_part">For the city-office from Mechelen (city) and the Flemish gouvernement.</p>
                            <ul class="work_list">
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">Contact person for the local tenants, the rental office and the external companies.</p>
                                </li>
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">Counsellor and social worker for the older, invalid and needy occupants.</p>
                                </li>
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">Basic maintenance of the 104 apartments.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section class="content editor">
                        <div class="sub_title_box">
                            <h4 class="sub_title">
                                2008 - 2010
                            </h4>
                            <h5 class="work_name">Video- and sound editor.</h5>
                        </div>
                        <div class="text_box">
                            <p class="text_part">Mostly freelance for small projects.</p>
                        </div>
                    </section>
                    <section class="content museum">
                        <div class="sub_title_box">
                            <h4 class="sub_title">
                                2001 - 2006
                            </h4>
                            <h5 class="work_name">Instructor & project leader.</h5>
                        </div>
                        <div class="text_box">
                            <p class="text_part">For the educational department of the Photo- and Movie Art Gallery of Antwerp.</p>
                            <p class="text_part">At different elementary- and secondary schools in Flanders.</p>
                            <ul class="work_list">
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">Organising workshops and introduction classes about the different components in 
                                    a movie production: scenario, script, recording and editing.</p>
                                </li>
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">Planning and supervising the recording days.</p>
                                </li>
                                <li>
                                    <img src="assets/cv/square.png" class="list_square" alt="list square">
                                    <p class="list_text">The video- and sound editing of the short films.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </section>
            </div>
        </article>`;

    work.title = `${titleClass}Experiences</h3>${closeButton}</div>`;
    work.content = `${contentClass}${work_content}</div>`;
    work.pop_up = `${popupClass}${work.getTitle()}${work.getContent()}</section>`;

    pop_up_element.innerHTML = `${work.getPopup()}`;

    const close = getById('close');
    close.addEventListener('click', () => {
        pop_up_element.classList.replace("box_visible", "box_hidden");
        info_element.classList.replace("box_hidden", "box_visible");
    });
};

const openWork = getById('getExp');
const exp_arrow = getById('exp_arrow');

openWork.addEventListener('click', () => {
    info_element.classList.replace("box_visible", "box_hidden");
    pop_up_element.classList.replace("box_hidden", "box_visible");
    createExperiences();
});
openWork.addEventListener('mouseover', () => {
    exp_arrow.src = 'assets/cv/arrow_right_white.png';
});
openWork.addEventListener('mouseout', () => {
    exp_arrow.src = 'assets/cv/arrow_right.png';
});


window.onload = () => {
    info_element.style.animationDelay = '1.65s';

    const removeDelay = setTimeout(() => {info_element.style.animationDelay = '0s';}, 2750);
    removeDelay;
};