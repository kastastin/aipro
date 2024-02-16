function CompanyItem({ companyName, active, isRunning }) {
  return (
    <li className="application__item">
      <div className="application__item-left">
        {active ? <CloseCircleFilled className="application__stop-icon" /> : ""}
        <span className="application__name">{companyName}</span>
      </div>

      <div className="application__item-right">
        <ExclamationCircleFilled className="application__error-icon" />
        {isRunning ? (
          <PauseCircleFilled className="application__pause-icon" />
        ) : (
          <PlayCircleFilled className="application__launch-icon" />
        )}

        <MoreOutlined
          onClick={() => navigate("settings")}
          className="application__more-icon"
        />
      </div>
    </li>
  );
}
export default CompanyItem;