import styles from "@/styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen py-2 bg-blue-200">
      <div className="m-auto bg-slate-50 rounded-md w-3/5  grid lg:grid-cols-2">
        <div className={styles.imgStyle}>
          <div className={styles.cartoonImg}></div>
          <div className={styles.cloud_one}></div>
          <div className={styles.cloud_two}></div>
        </div>
        <div className="right flex flex-col justify-evenly h-full">
          <div className="text-center py-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
