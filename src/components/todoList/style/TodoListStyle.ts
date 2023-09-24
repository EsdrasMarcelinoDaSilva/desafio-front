import styled from 'styled-components'

export const Box = styled.div`
    display: flex;
`
export const CenterBox = styled.main`
    width: 36%;
    padding: 1em 0 0 1em;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    border-radius: 0.5em;
    justify-content: center;
`
export const Section = styled.section`
    padding: 0.5em;
    width: 19.2em;
    display: flex;
    justify-content: center;
    gap: 2em;
`
export const Div = styled.div`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    height: fit-content;
    padding: 0.8em;
`
export const Title = styled.h2`
    color: #0F3F6A;
    margin: 1em 0 0.5em 0;
`
export const FieldTitle = styled.input`
    width: 99%;
    padding: 0.5em;
    &:focus {
        outline: none;
    }
    border: none;
`
export const FieldTask = styled.textarea`
    width: 99%;
    height: 10em;
    padding: 0.5em;
    resize: none;
    &:focus {
        outline: none;
    }
    border: none;
`
export const FieldSet = styled.fieldset`
    margin-bottom: 1em;
    width: 87%;
    &:focus-within {
        color: #66c00b;
        border-color: #66c00b;
    }
`
export const Legend = styled.legend`
    color: #3f3f3f;
    margin-left: 1em;
    fieldset:focus-within & {
        color: #66c00b; 
    }
`
export const Button = styled.button`
    cursor: pointer;
    padding: 0.4em;
` 