(function () {
    var data = window.SITE_DATA;

    if (!data || !Array.isArray(data.posts)) {
        return;
    }

    function isImageUrl(value) {
        return typeof value === "string" && /^(https?:|\/|\.\/)/i.test(value.trim());
    }

    function resolvePostSlug() {
        var path = window.location.pathname || "";
        var fileName = path.split("/").pop() || "";
        return fileName.replace(/\.html$/i, "");
    }

    function setPostMeta(post) {
        var metaLeft = document.querySelector(".post-meta-left");
        var readingTime = document.querySelector(".post-meta-reading-time");

        if (metaLeft) {
            metaLeft.textContent = post.category + " - Published: " + post.dateLabel;
        }

        if (readingTime) {
            readingTime.textContent = post.readingTime;
        }
    }

    function setPostCover(post) {
        var cover = document.querySelector(".post-cover");
        if (!cover) {
            return;
        }

        var imageBg = post.imageBg || "#1f2937";
        var hasImage = isImageUrl(post.image);

        cover.innerHTML = ""
            + "<div class='post-cover-bg' style='background: " + imageBg + ";'></div>"
            + (hasImage
                ? "<img class='post-cover-media' src='" + post.image + "' alt='Post cover for " + post.title + "' loading='lazy' />"
                : "");
    }

    function setPostTitle(post) {
        var heading = document.querySelector(".post-content h1");
        if (heading) {
            heading.textContent = post.title;
        }
    }

    function setDocumentTitle(post) {
        document.title = post.title;
    }

    var slug = resolvePostSlug();
    var post = data.posts.find(function (entry) {
        return entry.slug === slug;
    });

    if (!post) {
        return;
    }

    setDocumentTitle(post);
    setPostTitle(post);
    setPostMeta(post);
    setPostCover(post);
})();
