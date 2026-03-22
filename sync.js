(function () {
    var data = window.SITE_DATA;

    if (!data) {
        return;
    }

    function statusClass(status) {
        if (status === "Em Desenvolvimento") {
            return "status-dev";
        }
        if (status === "Finalizado") {
            return "status-done";
        }
        return "status-unknown";
    }

    function sortedPosts(posts) {
        return posts.slice().sort(function (a, b) {
            return new Date(b.dateISO) - new Date(a.dateISO);
        });
    }

    function isImageUrl(value) {
        if (typeof value !== "string") {
            return false;
        }

        return /^(https?:|\/|\.\/)/i.test(value.trim());
    }

    function postImageMarkup(post, ariaLabel) {
        var hasImage = isImageUrl(post.image);
        var imageBg = post.imageBg || (hasImage ? "#9ca3af" : post.image) || "#9ca3af";
        var imageElement = "";

        if (hasImage) {
            imageElement = "<img class='post-image-media' src='" + post.image + "' alt='" + ariaLabel + "' loading='lazy' />";
        }

        return ""
            + "<div class='post-image-shell' role='img' aria-label='" + ariaLabel + "'>"
            + "<div class='post-image-bg' style='background: " + imageBg + ";'></div>"
            + imageElement
            + "</div>";
    }

    function renderHomeProjects() {
        var grid = document.querySelector(".projetos-grid[data-sync='projects']");
        if (!grid) {
            return;
        }

        var devProjects = data.projects.filter(function (project) {
            return project.status === "Em Desenvolvimento";
        });

        grid.innerHTML = devProjects.map(function (project) {
            return ""
                + "<div class='projeto-card'>"
                + "<div class='projeto-header'>"
                + "<h3>" + project.title + "</h3>"
                + "<span class='status em-desenvolvimento'>" + project.status + "</span>"
                + "</div>"
                + "<p class='projeto-descricao'>" + project.description + "</p>"
                + "<div class='projeto-tech'>"
                + project.technologies.map(function (tech) {
                    return "<span class='tech-tag'>" + tech + "</span>";
                }).join("")
                + "</div>"
                + "</div>";
        }).join("");
    }

    function renderHomePosts() {
        var carousel = document.querySelector(".posts-carousel[data-sync='posts']");
        if (!carousel) {
            return;
        }

        var posts = sortedPosts(data.posts).slice(0, 6);

        carousel.innerHTML = posts.map(function (post) {
            return ""
                + "<article class='post-card post-card-clickable' data-url='" + post.url + "' role='link' tabindex='0' aria-label='Open " + post.title + "'>"
                + postImageMarkup(post, "Post cover for " + post.title)
                + "<div class='post-content'>"
                + "<div class='post-meta-box'>"
                + "<span class='post-meta-left'>" + post.category + " - Published: " + post.dateLabel + "</span>"
                + "<span class='post-meta-right'><span class='post-meta-icon' aria-hidden='true'>&#9201;</span> " + post.readingTime + "</span>"
                + "</div>"
                + "<h3>" + post.title + "</h3>"
                + "<p>" + post.description + "</p>"
                + "<p class='card-click-indicator'>Read More -&gt;</p>"
                + "</div>"
                + "</article>";
        }).join("");
    }

    function renderProjectsPage() {
        var strip = document.querySelector(".projects-strip[data-sync='projects-full']");
        if (!strip) {
            return;
        }

        strip.innerHTML = data.projects.map(function (project) {
            var currentStatusClass = statusClass(project.status);
            return ""
                + "<article class='project-row-card'>"
                + "<div class='project-icon' aria-hidden='true'>" + project.icon + "</div>"
                + "<div class='project-content'>"
                + "<div class='project-topline'>"
                + "<h3>" + project.title + "</h3>"
                + "<span class='status " + currentStatusClass + "'>" + project.status + "</span>"
                + "</div>"
                + "<p>" + project.description + "</p>"
                + "<p class='techs'>Technologies: " + project.technologies.join(", ") + "</p>"
                + "</div>"
                + "</article>";
        }).join("");
    }

    function renderPostsPage() {
        var strip = document.querySelector(".posts-strip[data-sync='posts-full']");
        if (!strip) {
            return;
        }

        var posts = sortedPosts(data.posts);

        strip.innerHTML = posts.map(function (post) {
            return ""
                + "<article class='post-row-card post-card-clickable' data-url='" + post.url + "' role='link' tabindex='0' aria-label='Open " + post.title + "'>"
                + postImageMarkup(post, "Post cover for " + post.title)
                + "<div class='post-content'>"
                + "<h3>" + post.title + "</h3>"
                + "<p>" + post.description + "</p>"
                + "<div class='post-meta-box'>"
                + "<span class='post-meta-left'>" + post.category + " - Published: " + post.dateLabel + "</span>"
                + "<span class='post-meta-right'><span class='post-meta-icon' aria-hidden='true'>&#9201;</span> " + post.readingTime + "</span>"
                + "</div>"
                + "<p class='card-click-indicator'>Read More -&gt;</p>"
                + "</div>"
                + "</article>";
        }).join("");
    }

    function activatePostCardLinks() {
        var cards = document.querySelectorAll(".post-card-clickable[data-url]");

        cards.forEach(function (card) {
            var url = card.getAttribute("data-url");
            if (!url) {
                return;
            }

            card.addEventListener("click", function () {
                window.location.href = url;
            });

            card.addEventListener("keydown", function (event) {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    window.location.href = url;
                }
            });
        });
    }

    renderHomeProjects();
    renderHomePosts();
    renderProjectsPage();
    renderPostsPage();
    activatePostCardLinks();
})();
