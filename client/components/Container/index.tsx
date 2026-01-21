const Container = ({ children, withOutPadding }: { children: React.ReactNode, withOutPadding?: boolean }) => {
  return (
    <div className={`border-border-table border-[0.6px] bg-bg-secondary rounded-[12px] ${withOutPadding ? '' : 'pt-[32px] pb-[32px] px-[25px]'}`}>
      {children}
    </div>
  )
}

export default Container;