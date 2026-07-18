/**
 * Calculates completed years of experience from a start date.
 * @param startDateStr The start date string in YYYY-MM-DD format.
 * @returns The number of completed years as an integer.
 */
export function getExperienceYears(startDateStr: string): number {
    const startDate = new Date(startDateStr);
    const today = new Date();
    let years = today.getFullYear() - startDate.getFullYear();
    const monthDiff = today.getMonth() - startDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < startDate.getDate())) {
        years--;
    }
    
    return years;
}
