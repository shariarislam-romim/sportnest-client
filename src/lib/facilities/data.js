export const fetchFacilities = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/facilities`)
    const data = await res.json();
    return data || [];
}