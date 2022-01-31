
export const wrapper = Component => {
    return (props) => {
        return <Component {...props}/>
    }
}