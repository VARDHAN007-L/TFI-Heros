const heroes = {
    "Mahesh Babu": {
        birth: "9 August 1975",
        birthplace: "Chennai, Tamil Nadu",
        debut: "Rajakumarudu (1999)",
        movies: "Pokiri, Okkadu, Srimanthudu, Maharshi, Guntur Kaaram",
        awards: "Multiple Filmfare Awards South"
    },

    "Prabhas": {
        birth: "23 October 1979",
        birthplace: "Chennai, Tamil Nadu",
        debut: "Eeswar (2002)",
        movies: "Baahubali, Salaar, Kalki 2898 AD, Mirchi",
        awards: "SIIMA and other film awards"
    },

    "Pawan Kalyan": {
        birth: "2 September 1971",
        birthplace: "Bapatla, Andhra Pradesh",
        debut: "Akkada Ammayi Ikkada Abbayi (1996)",
        movies: "Tholi Prema, Gabbar Singh, Attarintiki Daredi, OG",
        awards: "Filmfare Award South"
    },

    "Jr. NTR": {
        birth: "20 May 1983",
        birthplace: "Hyderabad, Telangana",
        debut: "Ninnu Choodalani (2001)",
        movies: "Simhadri, Yamadonga, Temper, Janatha Garage, RRR",
        awards: "Filmfare Award South and other awards"
    },

    "Allu Arjun": {
        birth: "8 April 1982",
        birthplace: "Chennai, Tamil Nadu",
        debut: "Gangotri (2003)",
        movies: "Arya, Race Gurram, Ala Vaikunthapurramuloo, Pushpa",
        awards: "National Film Award and Filmfare Awards South"
    }
};

document.querySelectorAll(".card").forEach(card => {

    const image = card.querySelector("img");
    const name = card.querySelector("h2").textContent;

    image.onclick = () => {

        const hero = heroes[name];

        document.getElementById("bioName").textContent = name;

        document.getElementById("bioDetails").innerHTML = `
            <b>Birth Date:</b> ${hero.birth}<br>
            <b>Birthplace:</b> ${hero.birthplace}<br>
            <b>Film Debut:</b> ${hero.debut}<br>
            <b>Popular Movies:</b> ${hero.movies}<br>
            <b>Awards:</b> ${hero.awards}
        `;

        document.getElementById("bioModal").style.display = "flex";
    };

});

function closeBio(event) {

    if (!event || event.target.id === "bioModal") {
        document.getElementById("bioModal").style.display = "none";
    }

}