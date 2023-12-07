import Button from "../Button/Button";
import "./LoadMore.css";

interface LoadMoreProps {
  actionOnClick: () => void;
}

const LoadMore = ({ actionOnClick }: LoadMoreProps): React.ReactElement => {
  return (
    <Button className="button button-loadMore" actionOnClick={actionOnClick}>
      Load More
    </Button>
  );
};

export default LoadMore;
