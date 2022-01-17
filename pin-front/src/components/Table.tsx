import { PageType } from "../types/PageType";
import { Pin } from "./Pin";

export default (props: { data: PageType[] }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {props.data.flatMap((page) =>
        page.photos.map((photo) => (
          <Pin
            key={photo.id}
            imageSrc={photo.src.large}
            backgroundColor={photo.avg_color}
          />
        ))
      )}
    </div>
  );
};
