import "./formulario-de-eventos-estilos.css"
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from '../Botao';
import { ListaSuspensa } from '../ListaSuspensa';

export function FormularioDeEvento ({ temas, aoSubmeter }) {

  function aoFormSubmetido(formData){
    const evento = {
      capa: formData.get('capa'),
      tema: temas.find((item) => {
        return item.id == formData.get('tema')
      }),
      data: new Date(formData.get('data')),
      titulo: formData.get('titulo')
    }
    aoSubmeter(evento);
  }

    return (
      <form className="form-evento" action={aoFormSubmetido}>
        <TituloFormulario>
          Preencha para criar um evento:
        </TituloFormulario>
        <div className="campos">
          <CampoDeFormulario>
            <Label htmlFor="nomeEvento">
              Qual o nome do evento?
            </Label>
            <CampoDeEntrada
              type="text"
              id='nomeEvento'
              placeholder='Summer dev hits'
              name='nomeEvento'
            />
          </CampoDeFormulario>
          <CampoDeFormulario>
            <Label htmlFor="capa">
              Qual o endereço da imagem de capa?
            </Label>
            
            <CampoDeEntrada
              type="text"
              id='capa'
              placeholder='http://...'
              name='capa'
            />
          </CampoDeFormulario>
          <CampoDeFormulario>
            <Label htmlFor="dataEvento">
              Data do evento
            </Label>
            <CampoDeEntrada
              type="date"
              id='dataEvento'
              name='dataEvento'
            />
          </CampoDeFormulario>
          <CampoDeFormulario>
            <Label htmlFor="temaEvento">
              Tema do evento
            </Label>
            <ListaSuspensa id="tema" name="tema" itens={temas}/>
          </CampoDeFormulario>
        </div>
        <div className='acoes'>
          <Botao>
            Criar evento
          </Botao>
        </div>
      </form>
    )
}