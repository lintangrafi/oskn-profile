import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(dateString: string): string {
  if (dateString === "Present") return "Present";
  
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { 
    year: "numeric", 
    month: "long" 
  };
  
  return date.toLocaleDateString("en-US", options);
}

export function calculateDuration(
  startDate: string,
  endDate: string | "Present"
): string {
  const start = new Date(startDate);
  const end = endDate === "Present" ? new Date() : new Date(endDate);
  
  const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                 (end.getMonth() - start.getMonth());
  
  if (months < 12) {
    return `${months} month${months !== 1 ? "s" : ""}`;
  }
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (remainingMonths === 0) {
    return `${years} year${years !== 1 ? "s" : ""}`;
  }
  
  return `${years} year${years !== 1 ? "s" : ""}, ${remainingMonths} month${
    remainingMonths !== 1 ? "s" : ""
  }`;
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Height of fixed header
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

export function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inDebounce: boolean;
  
  return function executedFunction(...args: Parameters<T>) {
    clearTimeout(inDebounce as unknown as NodeJS.Timeout);
    inDebounce = setTimeout(() => func(...args), limit) as unknown as boolean;
  };
}

export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
