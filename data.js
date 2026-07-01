window.SITE_DATA = {
    projects: [
        {
            title: "JLPTrial",
            description: "An app to help you study for the Japanese Language Proficiency Test.",
            technologies: ["React", "SQLite", "React-Native", "Expo"],
            status: "Em Desenvolvimento",
            icon: "Full"
        },
    ],
    posts: [
        {
            slug: "week11-new-projects",
            title: "Week 11 - New Projects",
            description: "After the last contribution to the Linux Kernel, we started the second phase of the class which consists of choosing a different FLOSS software to contribute. In this post, we detail the opportunities presented to us and our final choice for the next project. (I hope the icon doesn't spoiler anything)",
            dateISO: "2026-06-24",
            dateLabel: "24/06/2026",
            category: "Week 11",
            readingTime: "1 min read",
            image: "https://kde.org/stuff/clipart/logo/kde-logo-gray-transparent-3000x3000.png",
            imageBg: "#D95D39",
            url: "posts/week11-new-projects"
        },
        {
            slug: "week10-kernel-fast-patching",
            title: "Week 10 - Speedrunning patches",
            description: "Following last week's spoiler, our first patch was accepted with an additional suggestion. Our simplification made part of the code unnecessary, so this week we removed that unused part.",
            dateISO: "2026-06-10",
            dateLabel: "10/06/2026",
            category: "Week 10",
            readingTime: "1 min read",
            image: "https://dl.flathub.org/media/org/supertuxproject/SuperTux/4f6b0552fdc2366441e0bdc30b86f123/icons/128x128@2/org.supertuxproject.SuperTux.png",
            imageBg: "#D95D39",
            url: "posts/week10-kernel-fast-patching"
        },
        {
            slug: "week9-patch-final-adjustments",
            title: "Week 9 - Adjusting the Previous Patch to Kernel Standards",
            description: "This week we refined the previous kernel patch based on maintainer feedback, changed the persistence table to a more efficient array-based layout, adjusted the loop to start from the first valid entry, and sent the updated version for review. Spoiler: It got accepted : D",
            dateISO: "2026-06-01",
            dateLabel: "01/06/2026",
            category: "Week 9",
            readingTime: "3 min read",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0a0S3ve8hUYVEvWoI8HLDznb7v26gpcWwww&s",
            imageBg: "#ffffff",
            url: "posts/week9-patch-final-adjustments"
        },
        {
            slug: "week8-developing-a-patch-to-kernel",
            title: "Week 8 - Developing a patch to the Linux Kernel",
            description: "After several weeks of simpler work, this week we put everything into practice to develop a patch for the issue we chose in the previous week. After several discussions, we selected a strategy and implemented it in the kernel. We are currently waiting for the maintainer's answer.",
            dateISO: "2026-04-15",
            dateLabel: "15/04/2026",
            category: "Week 8",
            readingTime: "5 min read",
            image: "https://www.didierdelboo.be/art/under-construction-tux.png",
            imageBg: "#2E1A47",
            url: "posts/week8-developing-a-patch-to-kernel"
        },
        {
            slug: "week7-choosing-an-issue-to-work-on-in-the-kernel",
            title: "Week 7 - Choosing an issue to work on in the Linux Kernel",
            description: "This week's activity was not code-related, so we decided which issue to work on the following week.",
            dateISO: "2026-04-08",
            dateLabel: "08/04/2026",
            category: "Week 7",
            readingTime: "1 min read",
            image: "https://linuxfactory.fr/images/logo.png",
            imageBg: "#2E1A47",
            url: "posts/week7-choosing-an-issue-to-work-on-in-the-kernel"
        },
        {
            slug: "week6-introduction-to-the-industrial-IIO-subsystem",
            title: "Week 6 - Introduction to the Industrial I/O (IIO) Subsystem",
            description: "This activity was done during one of the class's free weeks, so it was a slightly simpler task compared to the others. In this week, we were introduced to the IIO driver structure and to how kernel code is organized.",
            dateISO: "2026-04-01",
            dateLabel: "01/04/2026",
            category: "Week 6",
            readingTime: "2 min read",
            image: "https://wiki.analog.com/_media/software/linux/docs/iio.png",
            imageBg: "#FFF",
            url: "posts/week6-introduction-to-the-industrial-IIO-subsystem"
        },
        {
            slug: "week5-sending-patches-by-email",
            title: "Week 5 - Sending Patches by email with git and USP Email",
            description: "This was my first week working with Git on the command line. I configured it to send emails automatically, though I ran into some issues with my email client.",
            dateISO: "2026-03-25",
            dateLabel: "26/03/2026",
            category: "Week 5",
            readingTime: "3 min read",
            image: "https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png",
            imageBg: "#0fafcc",
            url: "posts/week5-sending-patches-by-email"
        },
        {
            slug: "week4-character-device-drivers",
            title: "Week 4 - Linux kernel Character Device Drivers",
            description: "Overview of the 4th week, which was mostly a theoretical view of how Linux uses files. There was no hands-on experience this week.",
            dateISO: "2026-03-22",
            dateLabel: "22/03/2026",
            category: "Week 4",
            readingTime: "2 min read",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
            imageBg: "#87CEEB",
            url: "posts/week4-character-device-drivers"
        },
        {
            slug: "week3-kernel-config-and-modules",
            title: "Week 3 - Linux kernel build configuration and modules",
            description: "A summary of one of the most interesting weeks so far, not in terms of complexity, but in terms of its accomplishments.",
            dateISO: "2026-03-22",
            dateLabel: "22/03/2026",
            category: "Week 3",
            readingTime: "1 min read",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
            imageBg: "#87CEEB",
            url: "posts/week3-kernel-config-and-modules"
        },
        {
            slug: "week2-arm-kernel-with-kw",
            title: "Week 2 - Building and booting a custom ARM kernel with kw",
            description: "The first time I built my own (not yet customized) Linux distribution from source using kw, along with some issues regarding SSH.",
            dateISO: "2026-03-22",
            dateLabel: "22/03/2026",
            category: "Week 2",
            readingTime: "2 min read",
            image: "https://kworkflow.org/_images/kw_logo.png",
            imageBg: "#333333",
            url: "posts/week2-arm-kernel-with-kw"
        },
        {
            slug: "week1-qemu-libvirt-environment",
            title: "Week 1 - Setting up a test environment with QEMU and libvirt",
            description: "A short report on how I prepared a QEMU/libvirt environment for safe kernel experimentation, along with some considerations about my current Linux experience.",
            dateISO: "2026-03-22",
            dateLabel: "22/03/2026",
            category: "Week 1",
            readingTime: "2 min read",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Qemu_logo.svg/1280px-Qemu_logo.svg.png",
            imageBg: "#000080",
            url: "posts/week1-qemu-libvirt-environment"
        },
    ]
};
