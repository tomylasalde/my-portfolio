import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Obtiene el año actual

  return (
    <footer>
     
      <div className="center">
        <p className="text-sm mb-2">
          &copy; {currentYear} Tomas Lasalde Pataro. All rights reserved.
        </p>
      </div>
     
    </footer>
  );
}
