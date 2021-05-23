import { places } from "./where-do-we-go.data.js";

export function explore() {
  let sortedPlaces = sort([...places]);
  document.body.style.overflowX = "hidden";

  createSection(sortedPlaces);
  createDirection();

  let direction = document.querySelector(".direction");

  let prev = scrollY;
  let prevIndex = Math.round(scrollY / window.innerHeight);
  makeTag(sortedPlaces[prevIndex]);

  document.addEventListener("scroll", (event) => {
    const index = Math.round(scrollY / window.innerHeight);
    if (prevIndex != index) {
      changeTag(sortedPlaces[index]);
    }
    prevIndex = index;

    if (prev > scrollY) {
      direction.textContent = "N";
    } else if (prev < scrollY) {
      direction.textContent = "S";
    }
    prev = scrollY;
  });
}

function makeTag(place) {
  const tag = document.createElement("a");
  tag.className = "location";
  tag.setAttribute("id", "location-text");
  tag.style.color = place.color;
  tag.textContent = `${place.name}\n${place.coordinates}`;
  tag.setAttribute(
    "href",
    `https://google.com/maps/place/${place.coordinates}`
  );
  tag.setAttribute("target", "_blank");
  document.body.append(tag);
}

function changeTag(newPlace) {
  let toto = document.getElementById("location-text");
  toto.style.color = newPlace.color;
  toto.textContent = `${newPlace.name}\n${newPlace.coordinates}`;
  toto.setAttribute(
    "href",
    `https://google.com/maps/place/${newPlace.coordinates}`
  );
}

function getNorth(arg) {
  let coords = arg.coordinates.split(" ")[0].replace(/[Â°'."]/g, "");
  return coords.includes("N")
    ? (coords = Number(coords.slice(0, 5)))
    : Number(coords.slice(0, 5)) * -1;
}

function sort(arr) {
  let array = [...arr];
  array.sort((a, b) => {
    if (getNorth(a) > getNorth(b)) return -1;
    if (getNorth(a) < getNorth(b)) return 1;
    else return 0;
  });
  return array;
}

function createSection(arg) {
  arg.forEach((place) => {
    let section = document.createElement("section");
    section.style.background = `url(./where-do-we-go_images/${place.name
      .toLowerCase()
      .split(",")[0]
      .replace(/ /g, "-")}.jpg)`;
    section.style.backgroundRepeat = "no-repeat";
    section.style.backgroundSize = "cover";
    section.className = "section";
    document.body.append(section);
  });
}

function createDirection() {
  let dir = document.createElement("a");
  dir.className = "direction";
  dir.textContent = "N";
  document.body.append(dir);
}