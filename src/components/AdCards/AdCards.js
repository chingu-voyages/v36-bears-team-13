import AdCard from "../AdCard/AdCard";

export default function AdCards(ads) {
  return <ul id="adverts">{ads.map(AdCard)}</ul>;
}
