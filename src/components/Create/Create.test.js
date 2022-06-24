import { waitFor,render,fireEvent, screen} from '@testing-library/react'
import React from 'react'
import Create from './Create'
import user from '@testing-library/user-event'

describe('Create', ()=>{
    const onSubmit=jest.fn()

    beforeEach(()=>{
        onSubmit.mockClear();
    })
    it('onSubmit is called when all fields pass validation',async()=>{
        render(<Create onSubmit={onSubmit} />)
        const name  = getInputName()
        const image = getInputImage()
        const defenseSlider= getDefenseSlider()
        const attackSlider=getAttackSlider()
        await user.type(name, 'Alexis')
        await user.type(image, 'www.image.com')
        fireEvent.change(defenseSlider,{
            target:{value:50}
        })
        fireEvent.change(attackSlider,{
            target:{value:60}
        })
        const submitButton= getSubmitButton()
        user.click(submitButton)

        await waitFor(()=>{
            expect(onSubmit).toHaveBeenCalledTimes(1)
        })
        expect(onSubmit).toHaveBeenCalledWith({
            attack: "60",
            defense: "50",
            hp: "10",
            idAuthor: 1,
            image: "www.image.com",
            name: "Alexis",
            type: "--",
              })
    })
    it('asks to complete all the fields when one or more is missing',async()=>{
        render(<Create onSubmit={onSubmit} />)
        const jsdomAlert = window.alert; 
        window.alert = () => {}
        const name  = getInputName()
        const image = getInputImage()
        await user.type(name, 'Alexis')
        await user.type(image, 'www.image.com')
        
        const submitButton= getSubmitButton()
        user.click(submitButton)

        await waitFor(()=>{
            expect(onSubmit).toHaveBeenCalledTimes(1)
        })
        expect(onSubmit).toHaveBeenCalledWith({
            alert:true
              })
        window.alert = jsdomAlert;
        
    })
})

function getInputName(){
    return screen.getByRole('textbox',{
        name:/name/i
    })
}
function getInputImage(){
    return screen.getByRole('textbox',{
        name:/image/i
    })
}

function getAttackSlider(){
    return screen.getByRole('slider', {
        name: /slider\-attack/i
      })
}

function getDefenseSlider(){
    return screen.getByRole('slider', {
  name: /slider\-defense/i
})
}
function getSubmitButton(){
    return screen.getByRole('button', {
  name: /guardar/i
})
}