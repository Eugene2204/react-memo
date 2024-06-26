import { useParams } from "react-router-dom";

import { Cards } from "../../components/Cards/Cards";
import { ErrorCounter } from "../../components/ErrorCounter/ErrorCounter.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getLeaders } from "../../api.jsx";
import { useDispatch } from "react-redux";
import { setLeaders } from "../../store/slices.jsx";

export function GamePage() {
  const dispatch = useDispatch();
  const { pairsCount } = useParams();
  const isActiveGameMode = useSelector(state => state.game.isActiveGameMode);

  useEffect(() => {
    getLeaders().then(leaders => dispatch(setLeaders(leaders)));
  }, [dispatch]);

  return (
    <>
      <Cards pairsCount={parseInt(pairsCount, 10)} previewSeconds={5}></Cards>
      {isActiveGameMode && <ErrorCounter />}
    </>
  );
}
