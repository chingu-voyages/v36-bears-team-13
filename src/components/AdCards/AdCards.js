import AdCard from "../AdCard/AdCard";

export default function AdCards(ads) {
  return <section>{ads.map(AdCard)}</section>;
}
