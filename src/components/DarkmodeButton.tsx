const DarkmodeButton = () => {
  const onHandleDarkmode = () => {
    document.documentElement.classList.toggle('dark')
  }
  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <button
      type="button"
      title="Toggle Theme"
      onClick={onHandleDarkmode}
      className="
        w-12 
        h-6 
        rounded-full 
        p-1 
        bg-gray-400 
        dark:bg-gray-600 
        relative 
        transition-colors 
        duration-500 
        ease-in
        focus:border-transparent
      "
    >
      <div
        id="toggle"
        className="
            rounded-full 
            w-4 
            h-4 
            bg-primary
            dark:bg-point 
            relative 
            ml-0 
            dark:ml-6 
            pointer-events-none 
            transition-all 
            duration-300 
            ease-out
        "
      />
    </button>
  )
}
export default DarkmodeButton
