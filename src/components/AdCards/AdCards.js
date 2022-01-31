import AdCard from "../AdCard/AdCard";

export default function AdCards(ads) {
  return <section id="adverts">{ads.map(AdCard)}</section>;
}
