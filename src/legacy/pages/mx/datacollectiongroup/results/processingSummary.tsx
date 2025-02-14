import {
  faCheckCircle,
  faCircleExclamation,
  faCirclePlay,
  faCircleQuestion,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  getRankedResults,
  ResultRankParam,
  ResultRankShell,
} from 'legacy/helpers/mx/results/resultparser';
import { useAutoProc } from 'legacy/hooks/ispyb';
import { DataCollectionGroup } from 'legacy/pages/mx/model';
import {
  Card,
  Col,
  Container,
  OverlayTrigger,
  Popover,
  Row,
} from 'react-bootstrap';

export interface Props {
  proposalName: string;
  dataCollectionGroup: DataCollectionGroup;
  selectedPipelines: string[];
  resultRankShell: ResultRankShell;
  resultRankParam: ResultRankParam;
}

export default function ProcessingSummary({
  proposalName,
  dataCollectionGroup,
  selectedPipelines,
  resultRankShell,
  resultRankParam,
}: Props) {
  const { data } = useAutoProc({
    proposalName,
    dataCollectionId:
      dataCollectionGroup.DataCollection_dataCollectionId.toString(),
  });
  if (!data || data.flatMap((d) => d).length === 0) return null;

  const results = getRankedResults(
    data.flatMap((d) => d),
    resultRankShell,
    resultRankParam,
    selectedPipelines
  );

  return (
    <Card.Footer>
      <Container fluid>
        <Row>
          {results.map((r) => {
            return (
              <Col sm={'auto'} key={r.id}>
                <OverlayTrigger
                  trigger={['focus', 'hover']}
                  placement="bottom"
                  overlay={
                    <Popover>
                      <Popover.Body>{r.status}</Popover.Body>
                    </Popover>
                  }
                >
                  <div>
                    <StatusIcon status={r.status} /> <small>{r.program}</small>
                  </div>
                </OverlayTrigger>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Card.Footer>
  );
}

function StatusIcon({ status }: { status: string }) {
  let icon = faQuestionCircle;
  let color = 'black';
  if (status.toUpperCase() === 'FAILED')
    [icon, color] = [faCircleExclamation, 'red'];
  if (status.toUpperCase() === 'RUNNING')
    [icon, color] = [faCirclePlay, 'orange'];
  if (status.toUpperCase() === 'SUCCESS')
    [icon, color] = [faCheckCircle, 'green'];
  if (status.toUpperCase() === 'NO_RESULTS')
    [icon, color] = [faCircleQuestion, 'blue'];
  if (status.toUpperCase() === '1') [icon, color] = [faCheckCircle, 'green'];
  return <FontAwesomeIcon color={color} icon={icon} />;
}
