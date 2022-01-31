String.prototype.capitalize = function(){
    return this.charAt(0).toUpperCase() + this.slice(1);
}
export const usDateFormat = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
};
