// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    setActiveTabId(tabId)
  }

  const activeTabClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button type="button"className={activeTabClassName}onClickTabItem={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
