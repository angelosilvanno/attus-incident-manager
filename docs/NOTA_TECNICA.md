# Nota Técnica: Arquitetura e Gestão de Incidentes (Attus TaskFlow)

Este documento detalha as decisões técnicas, os desafios enfrentados e as perspectivas de evolução para o sistema desenvolvido.

## 1. Decisões de Arquitetura

### 1.1 Concorrência Otimista (Optimistic Locking)
Decidi implementar o controle de versão no banco de dados utilizando a anotação `@Version` do JPA. 
- **Por que:** Em sistemas de chamados, é comum que dois analistas abram o mesmo ticket. Sem esse controle, o último a salvar sobrescreveria as alterações do primeiro sem nenhum aviso (problema de *Lost Update*). 
- **Implementação:** O campo `version` garante que o registro só seja atualizado se a versão enviada pelo frontend for a mesma do banco.

### 1.2 Angular 18 Standalone + Reactive Forms
Optei pela arquitetura *Standalone* por ser o padrão mais moderno do Angular, eliminando a complexidade desnecessária de `NgModules`. 
- **Reactive Forms:** Escolhi este modelo de formulário para ter controle total sobre as validações e facilitar futuros testes unitários, garantindo que o estado do formulário seja previsível.

### 1.3 Camadas Isoladas no Backend
O backend segue o padrão Controller -> Service -> Repository. 
- **Service:** Toda a regra de negócio e a geração de logs de diagnóstico ficam concentradas aqui, mantendo o Controller apenas como um ponto de entrada para as requisições.

## 2. Trade-offs (Equilíbrios e Escolhas)

### 2.1 Bootstrap vs CSS Customizado
**Escolha:** Bootstrap 5 via CDN/NPM.
- **Ponto Positivo:** Agilidade na entrega e visual "clean" condizente com sistemas corporativos.
- **Ponto Negativo:** O projeto carrega alguns estilos que não são utilizados, o que aumenta levemente o peso inicial do frontend.

### 2.2 Bloqueio Otimista vs Pessimista
**Escolha:** Otimista.
- **Justificativa:** O bloqueio pessimista (travar a linha no banco) causaria gargalos de performance caso o sistema escalasse para milhares de usuários. O bloqueio otimista resolve o conflito de integridade sem prejudicar a velocidade de leitura do banco.

## 3. Análise de Incidente (Simulação)

Durante o desenvolvimento, simulei um incidente de concorrência abrindo o mesmo ticket em duas abas. O sistema se comportou como esperado:
- **Diagnóstico:** O backend lançou `ObjectOptimisticLockingFailureException`.
- **Tratamento:** O log capturou a tentativa de alteração de uma versão obsoleta, impedindo a corrupção do histórico do chamado.

## 4. Melhorias Futuras

Para tornar o sistema pronto para produção em larga escala, os próximos passos seriam:
1.  **Paginação na Listagem:** Atualmente o sistema busca todos os registros. Para um volume alto de dados, o `findAll()` deve ser substituído por `Pageable`.
2.  **Tratamento Global de Erros no Frontend:** Criar um `Interceptor` para capturar erros 409 (conflito) e mostrar um modal sugerindo o recarregamento automático dos dados.
3.  **Segurança:** Implementar autenticação via JWT para garantir que apenas analistas autorizados editem os incidentes.
4.  **Auditoria Detalhada:** Criar uma tabela de histórico para rastrear não apenas a última alteração, mas quem mudou cada campo do incidente ao longo do tempo.
