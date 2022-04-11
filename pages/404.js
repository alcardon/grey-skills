import styles from "../components/404styles.module.css";

const Page404 = () => {
  return (
    <>
      <div className="{styles.body}">
        <div className="{styles.text404}">
          <div>ERROR</div>
          <h1 className="{styles.h1}">404</h1>
          <hr />
          <div>Page Not Found</div>
        </div>

        <div className="{styles.astronaut}">
          <img
            src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
            alt=""
            className="{styles.src}"
          />
        </div>
      </div>
    </>
  );
};

export default Page404;
