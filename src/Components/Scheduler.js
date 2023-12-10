import React, { useEffect, useRef } from 'react';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
import './Scheduler.css';
const scheduler = window.scheduler;

const Scheduler = (props) => {
    const schedulerContainer = useRef(null);

    const initSchedulerEvents = () => {
        if (scheduler._$initialized) {
            return;
        }

        const onDataUpdated = props.onDataUpdated;

        scheduler.attachEvent('onEventAdded', (id, ev) => {
            if (onDataUpdated) {
                onDataUpdated('create', ev, id);
            }
        });

        scheduler.attachEvent('onEventChanged', (id, ev) => {
            if (onDataUpdated) {
                onDataUpdated('update', ev, id);
            }
        });

        scheduler.attachEvent('onEventDeleted', (id, ev) => {
            if (onDataUpdated) {
                onDataUpdated('delete', ev, id);
            }
        });
        scheduler._$initialized = true;
    };

    useEffect(() => {
        scheduler.skin = 'material';
        scheduler.config.header = ['day', 'week', 'month', 'date', 'prev', 'today', 'next'];
        scheduler.config.hour_date = '%g:%i %A';
        scheduler.xy.scale_width = 70;

        initSchedulerEvents();

        const { events } = props;
        scheduler.init(schedulerContainer.current, new Date(2020, 5, 10));
        scheduler.clearAll();
        scheduler.parse(events);

        return () => {
            // Clean up scheduler on component unmount
            scheduler.clearAll();
        };
    }, [props.events]);

    const setHoursScaleFormat = (state) => {
        scheduler.config.hour_date = state ? '%H:%i' : '%g:%i %A';
        scheduler.templates.hour_scale = scheduler.date.date_to_str(scheduler.config.hour_date);
    };

    useEffect(() => {
        scheduler.render();
    }, [props.timeFormatState]);

    setHoursScaleFormat(props.timeFormatState);

    return <div ref={schedulerContainer} style={{ width: '100%', height: '100%' }}></div>;
};

export default Scheduler;
