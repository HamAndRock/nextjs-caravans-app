import React, {useEffect} from 'react';
import {NavigationElement} from "../NavigationElement/NavigationElement";
import {Box, InputAdornment, OutlinedInput} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {StyledFormHelperText, StyledInputContainer, StyledSlider} from "../NavigationLayout";
import {useDispatch, useSelector} from "react-redux";
import {caravansActions} from "../../../../redux/reducers/caravansReducer";
import {getFiltersSelector} from "../../../../redux/reducers/caravansSelectors";

const useStyles = makeStyles({
        slider: {
            color: '#119383',
            '& .MuiSlider-rail': {
                color: '#1F224433'
            }
        }
    }
)

const useOutlinedInputStyles = makeStyles({
    root: {
        font: 'normal normal normal 16px/16px Roboto',
        letterSpacing: 0,
        color: '#1F2244',
        opacity: 1,
        "&.Mui-focused .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline": {
            borderWidth: 3,
            borderColor: "#119383"
        },
    },
    notchedOutline: {
        borderColor: '#EDEAE3',
        borderWidth: 2,
    }
})

export const NavigationPrice: React.FC = React.memo(() => {
    const statePrice = useSelector(getFiltersSelector).price

    const [value, setValue] = React.useState<number[]>([statePrice.min, statePrice.max])

    const classes = useStyles();
    const outlinedInputStyles = useOutlinedInputStyles();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(caravansActions.priceSet(value[0], value[1]))
        dispatch(caravansActions.filtersApplied())
    }, [value, dispatch])

    const handleChange = (event: Event, newValue: number | number []) => {
        setValue(newValue as number[]);
    }

    const priceIsNotValid = value.some(v => v < 100 || v > 10000)

    const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, price: string) => {
        const dict: {[index: string]: number} = {
            min: 0,
            max: 1
        }
        const input = Number(event.target.value)
        let arr = [...value]
        arr[dict[price]] = !Number.isNaN(input) ? +event.target.value : value[dict[price]]
        setValue(arr  as number[])
    }

    return (
        <NavigationElement title={'Cena za den'}>
            <Box>
                <StyledSlider
                    getAriaLabel={() => 'Price'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={100}
                    max={10000}
                    color={'primary'}
                    className={classes.slider}
                />
            </Box>
            <StyledInputContainer>
                <OutlinedInput
                    classes={outlinedInputStyles}
                    id="outlined-adornment-weight"
                    sx={{ width: 156, height: 48 }}
                    value={value[0]}
                    onChange={(e) => valueChangeHandler(e, 'min')}
                    endAdornment={<InputAdornment position="end">Kč</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'minPrice',
                    }}
                />

                <OutlinedInput
                    classes={outlinedInputStyles}
                    id="outlined-adornment-weight"
                    sx={{ width: 156, height: 48 }}
                    value={value[1]}
                    onChange={(e) => valueChangeHandler(e, 'max')}
                    endAdornment={<InputAdornment position="end">Kč</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'minPrice',
                    }}
                />
            </StyledInputContainer>
            {priceIsNotValid &&
                <StyledFormHelperText id="outlined-weight-helper-text">Cena musí být výšší než 100 a menší než 10000</StyledFormHelperText>
            }
        </NavigationElement>
    );
})

NavigationPrice.displayName = 'NavigationPrice'
