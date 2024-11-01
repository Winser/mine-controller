import { getAllEnergyStorage } from "@/database/energy/getAll";
import s from "@/styles/page.module.scss";

export default async function Home() {
  const data = await getAllEnergyStorage()
  return (
    <div className={s.energyListWrapper}>
      <div className={s.energyList}>
        {data.map((item) => (
          <div className={s.energyItem} key={item.name}>
            <div className={s.energyName}>{item.name}</div>
            <div className={s.energyValue}>{item.stored} / {item.capacity}</div>
            <div className={s.energyValue}>{item.stored / item.capacity * 100}%</div>
            {/* progress bar */}
            <div
              className={s.energyBar} >
              <div style={{ width: `${item.stored / item.capacity * 100}%` }} className={s.fill} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
