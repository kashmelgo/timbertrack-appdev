import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

export default function Chart() {
  return (
        <div>
            <ChartDonut
                ariaDesc="Average number of pets"
                ariaTitle="Donut chart example"
                constrainToVisibleArea={true}
                data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
                labels={({ datum }) => `${datum.x}: ${datum.y}%`}
                legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
                legendOrientation="vertical"
                legendPosition="right"
                padding={{
                    bottom: 20,
                    left: 20,
                    right: 140, // Adjusted to accommodate legend
                    top: 20
                }}
                subTitle="Pets"
                title="100"
                width={350}
                />
        </div>
  );
}
