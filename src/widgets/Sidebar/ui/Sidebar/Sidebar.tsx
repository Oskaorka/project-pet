import { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { classNames } from 'shared/lib/classNames/classNames';
import { classNames } from '../../../../shared/lib/classNames/classNames';
// import { Button } from 'shared/ui/Button/Button';
import { Button } from '../../../../shared/ui/Button/Button';
// import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
// import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { ThemeSwitcher } from '../../../../widgets/ThemeSwitcher';
import { LangSwitcher } from '../../../../widgets/LangSwitcher/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            {/* <button type="button" onClick={onToggle}>{t('toggle')}</button> */}
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
            >
                {t('toggle')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
