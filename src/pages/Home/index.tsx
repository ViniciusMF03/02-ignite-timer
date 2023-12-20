import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

/* controlled = é manter em tempo real a informação que o usuario insere na nossa aplicação, dentro do estado, dentro de uma variável do nosso componente -->
 --> trás muita fluidez para conseguir mostrar ou e deixar de mostrar coisas no interface, baseado no input do usuário
 --> ponto negativo: se a aplicação for muito complexa com muitas informações, o processo de recalcular o conteúdo do componente pode ser um pouco lento
 --> quando utiliza-lo ? Em um formulário simples(com poucos campos), numa interface simples, num formulário de login ou de cadastro
 uncontrolled = busca a informação do valor do input sommente quando precisarmos dela. Usada quando se tem muitos inputs em tela */

/**
 * function register(name: string) {
 *   return {
 *    onChange: () => void,
 *    onBlur: () => void,
 *    onFocus: () => void,
 *  }
 * }
 */

export function Home() {
  const { register, handleSubmit, watch } = useForm()

  function handleCreateNewCycle(data: any) {}

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Banana" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
