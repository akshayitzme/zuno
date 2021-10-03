export default function formatDate(rawDate){
    if(rawDate){
        let splitted= rawDate.split('-')
        let date= splitted[2].split("T")[0]
        let monthNum= splitted[1]
        let year= splitted[0]
        return(`${date}-${monthNum}-${year}`)
    }
}