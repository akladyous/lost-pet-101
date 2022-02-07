// # REACT - heigher Order Component
export const wrapper = Component => {
    return (props) => {
        return <Component {...props}/>
    }
}