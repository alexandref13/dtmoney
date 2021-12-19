import { Container } from "./styles";

export function TransactionsTable(){
  return(
    <Container>
      <table>
        <thead>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>
        <tbody>
          <tr>
            <td>
              Desenvolvimento de webSite
            </td>
            <td className="income">
              R$12000,00
            </td>
            <td>
              Desenvolvimento
            </td>
            <td>
              20/12/2021
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              PC
            </td>
            <td className="outcome">
              - R$6000,00
            </td>
            <td>
              Aparelhos para trabalho
            </td>
            <td>
              05/06/2022
            </td>
          </tr>
        </tbody>
      </table>
      
    </Container>
  )
}