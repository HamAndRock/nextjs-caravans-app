import React, {useEffect, useState} from 'react';
import {TypeCard} from "./TypeCard/TypeCard";
import {LastTypeCard, TypeNavigationElement} from "../NavigationLayout";
import {useDispatch, useSelector} from "react-redux";
import {caravansActions} from "../../../../redux/reducers/caravansReducer";
import {getFiltersSelector} from "../../../../redux/reducers/caravansSelectors";

const caravanTypes = [
    {title: 'Campervan', type: 'Campervan', text: 'Obytka s rozměry \nosobáku, se kterou \ndojedete všude.', id: 0},
    {title: 'Integrál', type: 'Intergrated', text: 'Král mezi karavany. \nLuxus na kolech.', id: 1},
    {title: 'Vestavba', type: 'BuiltIn', text: 'Celý byt geniálně \nposkládaný do dodávký.', id: 2},
    {title: 'Přívěs', type: 'Alcove', text: 'Tažný karavan za vaše \nauto. Od kapkovitých až \npo rodině.', id: 3}
]
export const NavigationType: React.FC = React.memo(() => {
    const stateTypes = useSelector(getFiltersSelector).type

    const [types, setTypes] = useState<string[]>(stateTypes)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(caravansActions.typeSet(types))
        dispatch(caravansActions.filtersApplied())
    }, [types, dispatch])

    const onClickHandler = (type: string) => {
        if(types.some(t => t === type)) {
            setTypes(types.filter(t => t !== type))
        } else {
            setTypes([...types, type])
        }
    }

    return (
        <TypeNavigationElement title={'Typ karavanu'}>
            {caravanTypes.map(t => {
                return (
                    t.id + 1 !== caravanTypes.length ?
                        <TypeCard key={t.id} isInArray={types.some(i => i === t.type)} title={t.title} onClick={() => onClickHandler(t.type)}>
                            {t.text}
                        </TypeCard> :
                        <LastTypeCard key={t.id} isInArray={types.some(i => i === t.type)} title={t.title} onClick={() => onClickHandler(t.type)}>
                            {t.text}
                        </LastTypeCard>
                )
            })}
        </TypeNavigationElement>
    );
})

NavigationType.displayName = 'NavigationType'
