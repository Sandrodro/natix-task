import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import styles from "./styles.module.css";
import CardContainer from "../../components/CardContainer";
import NextButton from "../../components/NextButton";
import VARIANTS from "../../config/buttonVariants";
import { setEventsLoadingStatus } from "../../state/eventsSlice/actionCreators";
import STATUSES from "../../config/statuses";
import SearchBar from "../../components/Searchbar";
import EventsDisplay from "../../components/EventsDisplay";

function Main() {
  const events = useSelector((state) => state.events);
  const currentPage = events.currentPage;
  const dispatch = useDispatch();

  const eventState = useState(events.data.data);

  const handleNextPage = () =>
    dispatch(setEventsLoadingStatus(STATUSES.PENDING, currentPage + 1));
  const handlePreviousPage = () =>
    dispatch(setEventsLoadingStatus(STATUSES.PENDING, currentPage - 1));

  return (
    <main className={styles.container}>
      {events.status === STATUSES.SUCCESS && (
        <>
          <EventsDisplay data={events.data.data} />
        </>
      )}
      {events.status === STATUSES.PENDING && <h1>Events Loading...</h1>}
      {events.status === STATUSES.FAILED && <h1>Event Loading Failed!</h1>}
      {currentPage > 1 && (
        <NextButton
          variant={VARIANTS.PREVIOUS}
          onClickFn={handlePreviousPage}
        />
      )}
      <NextButton variant={VARIANTS.NEXT} onClickFn={handleNextPage} />
    </main>
  );
}

export default Main;
