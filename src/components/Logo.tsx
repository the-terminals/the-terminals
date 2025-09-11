const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`terminals-logo ${className}`}>
      <div className="terminals-logo-the">THE</div>
      <div className="terminals-logo-terminals">TERMINALS</div>
    </div>
  );
};

export default Logo;