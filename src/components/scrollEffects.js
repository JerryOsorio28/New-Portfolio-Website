    // This function waits for any scroll to happen, and changes the properties for the nav bar,
    // as well as setting back everything to it's originality when scroll is back at the top.
    const scrollEffect = () => {
        // scroll effect for the navigation bar
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            let navBar = document.getElementsByClassName('navigationBar')[0]
            navBar.style.backgroundColor = "#505050"
            navBar.style.boxShadow = '1px 1px 5px rgba(0, 0, 0, 0.349)'
        } else {
            let navBar = document.getElementsByClassName('navigationBar')[0]
            navBar.style.backgroundColor = "#333333"
            navBar.style.boxShadow = 'none'
        }
        // scroll effect for the project section
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
            let projectsTitle = document.getElementById('projectsTitle')
            projectsTitle.style.animation = 'fadeInUp 1s'
            projectsTitle.style.visibility = 'visible'

            let project1 = document.getElementsByClassName('projectsSections')[0]
            project1.style.animation = 'fadeInUp 1s'
            project1.style.visibility = 'visible'

            let project2 = document.getElementsByClassName('projectsSections')[1]
            project2.style.animation = 'fadeInUp 1s'
            project2.style.visibility = 'visible'
        }
        // scroll effect for the contact section
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800){
            let email = document.getElementById('emailLogo')
            email.style.animation = 'slideRight 1s'
            email.style.animationDelay = '.5s'
            setTimeout(() => {
                email.style.visibility = 'visible'
            },1000)

            let github = document.getElementById('githubLogo')
            github.style.animation = 'slideRight 1s'
            github.style.animationDelay = '.3s'
            setTimeout(() => {
                github.style.visibility = 'visible'
            },1000)
            
            let linkedin = document.getElementById('linkedinLogo')
            linkedin.style.animation = 'slideRight 1s'
            setTimeout(() => {
                linkedin.style.visibility = 'visible'
            },1000)
        }
    }
    // We invoke the 'scrollEffect' once the window object detects scrolling
    window.onscroll = function () {scrollEffect()}