import styles from "./DropdownMenu.module.scss";
import Link from "next/link";

export default function DropdownMenu({ brands }) {
  return (
    <div className={"dropdown"}>
      <button
        className={"btn btn-secondary dropdown-toggle" + " " + styles.menu}
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Марка
      </button>
      <div
        className="dropdown-menu dropdown-menu-dark"
        aria-labelledby="dropdownMenuButton"
      >
        {brands.map((brand) => {
          return (
            <Link
              href={"/brand/[brandName]"}
              as={`/brand/${brand}`}
              key={brand}
            >
              <a className="dropdown-item">{brand}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
