const useFormatNumber = () => {

    const FormatNumber = (number) => {
        const numberFormated = number / 10
        return numberFormated.toFixed(2)
    }

    return [FormatNumber]

}

export default useFormatNumber