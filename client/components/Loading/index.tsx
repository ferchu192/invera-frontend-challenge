function Loading() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.35)',
      backdropFilter: 'blur(1px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10,
      borderRadius: 'inherit',
    }}>
      <div style={{
        width: '32px',
        height: '32px',
        border: '2px solid rgba(255,255,255,0.15)',
        borderTop: '2px solid rgba(255,255,255,0.7)',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default Loading;
