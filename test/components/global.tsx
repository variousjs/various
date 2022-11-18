import React, { useEffect, useState } from 'react'
import { Descriptions, DatePicker, Button } from 'antd'
import moment from 'moment'
import { useLocation } from 'react-router-dom'
import { onComponentMounted, ComponentProps, getEnv, getConfig, getMountedComponents } from '@variousjs/various'
import { Store, Config } from '../types'

export default (props: ComponentProps<Store>) => {
  const config = getConfig() as Config
  const [mounteds, setMounteds] = useState<string[]>([])
  const [show, setShow] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setShow(false)
    const un = onComponentMounted('render-k', () => {
      setShow(true)
    })
    return un
  }, [pathname])

  return (
    <div style={{ width: 610 }} className="component">
      <Descriptions column={3} size="small" layout="vertical" bordered>
        <Descriptions.Item label="Store">
          <span data-name="global-name">{props.$store.name}</span>
        </Descriptions.Item>

        <Descriptions.Item label="ENV">
          <span data-name="global-name">{getEnv()}</span>
        </Descriptions.Item>

        <Descriptions.Item span={2} label="Moment I18n">
          <DatePicker
            id="date-picker"
            defaultValue={moment('2022-02-15')}
            format="MMMM Do YYYY"
          />
        </Descriptions.Item>

        <Descriptions.Item span={3} label="Config">
          <div data-name="global-name">
            {config.pages.map((t) => t.component).join(', ')}
          </div>
        </Descriptions.Item>

        {show ? (
          <>
            <Descriptions.Item span={3} label="Mounted Components">
              <div data-name="global-name">
                {mounteds.join(', ') || '-'}
              </div>
            </Descriptions.Item>

            <Descriptions.Item label="IsMounted">
              <div data-name="global-name">
                -
              </div>
            </Descriptions.Item>

            <Descriptions.Item label="On Mounted">
              <div data-name="global-name">
                -
              </div>
            </Descriptions.Item>

            <Descriptions.Item label="On multi component Mounted">
              <div data-name="global-name">
                -
              </div>
            </Descriptions.Item>

            <Descriptions.Item label="Actions">
              <Button
                onClick={() => {
                  setMounteds(getMountedComponents())
                }}
                size="small"
                type="primary"
              >
                MountedComponents
              </Button>
            </Descriptions.Item>
          </>
        ) : null}
      </Descriptions>
    </div>
  )
}
